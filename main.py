import asyncio
import os
import random
import traceback
from config import *
from loguru import logger
from playwright.async_api import async_playwright
from utils import get_accounts, get_format_proxy, switch_to_page_by_title
from actions import restake_on_solblaze, connect_to_solayer, deposit_bsol, deposit_sol, register_to_solayer




async def run(id, private_key, proxy, semaphore):
    async with semaphore:
        
        # 3 попытки зайти в кошелек
        for _ in range(3):
            try:
                logger.info(f"{id} | START")

                # Initialize the browser and context
                async with async_playwright() as playwright:
                    args=[
                        '--disable-blink-features=AutomationControlled',
                        f"--disable-extensions-except={os.path.abspath('PhantomExtension')}",
                        f"--load-extension={os.path.abspath('PhantomExtension')}"
                    ]
                    if proxy is not None and USE_PROXY is True:
                        address, port, login, password = get_format_proxy(proxy)
                        context = await playwright.chromium.launch_persistent_context(
                            '',
                            headless=False,
                            user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
                            proxy={
                            "server": f"http://{address}:{port}",
                            "username": login,
                            "password": password
                            },
                            args=args
                        )
                    else:
                        context = await playwright.chromium.launch_persistent_context(
                            '',
                            headless=False,
                            user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
                            args=args
                        )
                    
                    await context.new_page()
    
                    page = await switch_to_page_by_title(context, 'Phantom Wallet')
                    extension_url = page.url.split('/')[2].strip()
                    
                    await page.goto(f'chrome-extension://{extension_url}/onboarding.html', timeout=5000)
                    try:
                        empty_page1 = await switch_to_page_by_title(context, '')
                        await empty_page1.close()
                        empty_page2 = await switch_to_page_by_title(context, '')
                        await empty_page2.close()
                    except:
                        pass
                    
                    await page.click('button[data-testid="create-wallet-button"]', timeout=5000)
                    await page.wait_for_selector('input', timeout=5000)
                    inputs = await page.query_selector_all('input')
                    await inputs[0].type("Password_12345")
                    await inputs[1].type("Password_12345")
                    await inputs[2].click()
                    await asyncio.sleep(random.uniform(0.5, 1))
                    await page.click('button[data-testid="onboarding-form-submit-button"]', timeout=5000)
                    await asyncio.sleep(random.uniform(0.5, 1))
                    await page.click('input[data-testid="onboarding-form-saved-secret-recovery-phrase-checkbox"]', timeout=5000)
                    await page.click('button[data-testid="onboarding-form-submit-button"]', timeout=5000)

                    await page.goto(f'chrome-extension://{extension_url}/popup.html')
                    await page.click('button[type="submit"]')
                    await page.click('div[data-testid="settings-menu-open-button"]', timeout=5000)
                    await page.click('div[data-testid="sidebar_menu-button-add_account"]', timeout=5000)
                    await page.click('//div[6]/div/div/div/div[4]', timeout=5000)
                    await page.fill('input[name="name"]', "wallet")
                    await page.fill('textarea[name="privateKey"]', private_key.strip())
                    await asyncio.sleep(random.uniform(1, 3))
                    await page.click('button[type="submit"]')
                    await asyncio.sleep(random.uniform(2, 4))
                    
                    for func_name in LIST_OF_ACTIONS:
                        count_errors = 0
                        for _ in range(MAX_RETRY):
                            if count_errors > MAX_RETRY:
                                logger.error(f"{id} | Error rate of more than {MAX_RETRY} | Skip wallet...")
                                return
                            if count_errors > 0:
                                logger.info(f"{id} | Retry...")
                                
                            try:
                                func = globals()[func_name]
                                await func(id, context, page)
                                break
                            except Exception as ex:
                                logger.error(f'{id} | {ex}', traceback.format_exc())
                                count_errors+=1
                                
                                        
                    logger.warning(f"{id} | Wallet is finished work")
                    await asyncio.sleep(10)
                    
                    return
                
                
                
                
            except Exception as ex:
                logger.error(f"{id} | {ex}") # {traceback.format_exc()}
                await asyncio.sleep(1)
                logger.warning(f"{id} | Retry...")
            finally:
                try:
                    await context.close()
                except:
                    pass




async def main(accounts):
    semaphore = asyncio.Semaphore(THREADS_NUM)
    tasks = [run(id, private_key, proxy, semaphore) for id, private_key, proxy in accounts]
    await asyncio.gather(*tasks)

if __name__ == "__main__":
    accounts = get_accounts()
    logger.info(f"Loaded {len(accounts)} accounts")
    asyncio.run(main(accounts))
    logger.info("Wallet is finished")
    