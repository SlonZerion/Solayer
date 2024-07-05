
import random
import traceback
from utils import  generate_random_email, phantom_confirm_tx, switch_to_page_by_title
from config import *


import asyncio

from random import uniform
from loguru import logger


async def restake_on_solblaze(id, context, page):

    logger.info(f"{id} | START restake on solblaze")


    await page.goto('https://stake.solblaze.org/app/')
    
    try:
        await page.click(f'button:text("Agree")', timeout=5000)
    except:
        pass
    
    await page.click("#top_right_button", timeout=5000)
    await asyncio.sleep(random.uniform(1, 2))
    await page.click('text="Phantom"', timeout=5000)
    
    extension = await switch_to_page_by_title(context, 'Phantom Wallet')
    await extension.click('button[type="submit"]', timeout=10000)
    
    logger.info(f"{id} | Connected to Solblaze")
    
    await asyncio.sleep(random.uniform(1, 2))
    
    solblaze_input_sol = round(random.uniform(float(AMOUNT_SOL_TO_BSOL[0]), float(AMOUNT_SOL_TO_BSOL[1])), 9)
    await page.fill('input[id="stake_input"]', str(solblaze_input_sol), timeout=20000) 
    
    logger.info(f"{id} | Input {solblaze_input_sol} SOL on Solblaze")
    
    await asyncio.sleep(random.uniform(1, 2))
    
    await page.click(f'span:text("Stake")', timeout=5000)
    
    phantom_confirm = await phantom_confirm_tx(context)
    
    if phantom_confirm:
        logger.success(f"{id} | Wallet has been deposited {solblaze_input_sol} SOL on Solblaze")
        return
        
    sleep_duration = random.randrange(NEXT_TX_MIN_WAIT_TIME, NEXT_TX_MAX_WAIT_TIME)
    logger.info(f"{id} | Sleep {sleep_duration}")
    await asyncio.sleep(sleep_duration)
    

async def deposit_bsol(id, context, page):
    
    logger.info(f"{id} | START deposit all bSOL to Solayer")
    

    count_errors = 0
    for _ in range(MAX_RETRY):
        if count_errors > MAX_RETRY:
            logger.error(f"{id} | Error rate of more than {MAX_RETRY} | Skip wallet...")
            return
        if count_errors > 0:
            logger.info(f"{id} | Retry...")
        try:
            await page.goto('https://app.solayer.org/dashboard/deposite-withdraw?id=bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1')
            
            await asyncio.sleep(random.uniform(1, 2))
            await page.click(f'button:text("MAX")', timeout=10000)
            await asyncio.sleep(random.uniform(1, 2))
            await page.click(f'button:text("Deposit ")', timeout=10000)

            
            extension = await switch_to_page_by_title(context, 'Phantom Wallet')
            await asyncio.sleep(random.uniform(1, 2))
            await extension.click('button[data-testid="primary-button"]', timeout=10000)
            

            logger.success(f"{id} | Wallet has been deposited all bSOL to Solayer")
            return
    
        except Exception as ex:
            logger.error(f'{id} | {ex}', traceback.format_exc())
            count_errors+=1
            
            try:
                await extension.close()
            except:
                pass
        
    sleep_duration = random.randrange(NEXT_TX_MIN_WAIT_TIME, NEXT_TX_MAX_WAIT_TIME)
    logger.info(f"{id} | Sleep {sleep_duration}")
    await asyncio.sleep(sleep_duration)
    
    
async def deposit_sol(id, context, page):
    
    logger.info(f"{id} | START deposit SOL to Solayer")
    

    count_errors = 0
    for _ in range(MAX_RETRY):
        if count_errors > MAX_RETRY:
            logger.error(f"{id} | Error rate of more than {MAX_RETRY} | Skip wallet...")
            return
        if count_errors > 0:
            logger.info(f"{id} | Retry...")
        try:
            await page.goto('https://app.solayer.org/dashboard/deposite-withdraw?id=native-sol')
            
            await asyncio.sleep(random.uniform(1, 2))
            
            input_sol = round(random.uniform(float(AMOUNT_SOL[0]), float(AMOUNT_SOL[1])), 9)
            await page.fill('input[name="depositAmount"]', str(input_sol), timeout=20000) 
            
            logger.info(f"{id} | Input {input_sol} SOL on Solayer")
            
            await asyncio.sleep(random.uniform(1, 2))
            await page.click(f'button:text("Deposit ")', timeout=10000)

            
            extension = await switch_to_page_by_title(context, 'Phantom Wallet')
            await asyncio.sleep(random.uniform(1, 2))
            await extension.click('button[data-testid="primary-button"]', timeout=10000)
            

            logger.success(f"{id} | Wallet has been deposited {input_sol} SOL to Solayer")
            return
    
        except Exception as ex:
            logger.error(f'{id} | {ex}', traceback.format_exc())
            count_errors+=1
            
            try:
                await extension.close()
            except:
                pass
        
    sleep_duration = random.randrange(NEXT_TX_MIN_WAIT_TIME, NEXT_TX_MAX_WAIT_TIME)
    logger.info(f"{id} | Sleep {sleep_duration}")
    await asyncio.sleep(sleep_duration)
    
    
async def register_to_solayer(id, context, page):
    
    logger.info(f"{id} | START connect to Solayer")
    
    count_errors = 0
    for _ in range(MAX_RETRY):
        if count_errors > MAX_RETRY:
            logger.error(f"{id} | Error rate of more than {MAX_RETRY} | Skip wallet...")
            return
        if count_errors > 0:
            logger.info(f"{id} | Retry...")
        try:
            await page.goto('https://app.solayer.org/', timeout=20000)
            
            await asyncio.sleep(random.uniform(3, 4))
            await page.click('div:text("Phantom")', timeout=5000)
            
            try:
                extension = await switch_to_page_by_title(context, 'Phantom Wallet')
                await asyncio.sleep(random.uniform(1, 2))
                await extension.click('button[type="submit"]', timeout=10000)
                await asyncio.sleep(random.uniform(2, 3))
            except:
                pass
            
            extension = await switch_to_page_by_title(context, 'Phantom Wallet')
            await asyncio.sleep(random.uniform(1, 2))
            await extension.click('button[data-testid="primary-button"]', timeout=10000)
            await asyncio.sleep(random.uniform(4, 5))
            
            try:
                await page.wait_for_selector('text="Restaked"', timeout=6000)
                logger.success(f"{id} | Wallet has been logged to Solayer")
                return
            except:
                try:
                    await page.click('a:text(" Join Discord ")', timeout=3000)
                    await asyncio.sleep(random.uniform(1, 2))
                    await page.click('a:text(" Follow ")', timeout=3000)
                    await switch_to_page_by_title(context, 'Solayer Dashboard | Solana restaking')
                    await page.click('button:text("Next")', timeout=3000)
                except:
                    pass
                
                try:
                    with open("ref_codes.txt", 'r') as file:
                        lines = file.readlines()
                    
                    if not lines:
                        logger.error(f"{id} | ref_codes.txt is empty.")
                        return
                    
                    otp_code = lines[0].strip()                    

                    input_fields = await page.query_selector_all("ng-otp-input input[type='text']")
                    await input_fields[0].fill(otp_code)
                    
                    # Записываем оставшиеся строки обратно в файл
                    with open("ref_codes.txt", 'w') as file:
                        file.writelines(lines[1:])
                        
                    logger.info(f"{id} | Regitstered with ref: {otp_code}")
                except:
                    pass
                    
                try:
                    email = generate_random_email()
                    await page.fill('input[name="email"]', email, timeout=1000)  
                    await asyncio.sleep(random.uniform(1, 2))
                    await page.click('button:text("Access Solayer")', timeout=3000)       
                    logger.info(f"{id} | Input email: {email}")  
                except:
                    pass
                
                await page.goto('https://app.solayer.org/', timeout=20000)
                
                await page.wait_for_selector('text="Restaked"', timeout=6000)
                
                await asyncio.sleep(random.uniform(3, 4))
                                
                invite_code_elements = await page.query_selector_all(".invite-code-box-item .f-12.fw-550.leading-tight")
                    
                logger.info(f"{id} | Write ref-codes into ref_codes.txt: ")  

                # Прочитайте существующие коды из файла
                try:
                    with open('ref_codes.txt', 'r') as file:
                        existing_codes = set(line.strip() for line in file)
                except FileNotFoundError:
                    existing_codes = set()

                # Откройте файл для записи новых инвайт кодов
                with open('ref_codes.txt', 'a') as file:
                    for element in invite_code_elements:
                        invite_code = await element.text_content()
                        invite_code = invite_code.strip()
                        if invite_code not in existing_codes:
                            file.write('\n' + invite_code)
                            logger.info(f"New code added: {invite_code}")
                            existing_codes.add(invite_code)
                        else:
                            logger.info(f"Duplicate code skipped: {invite_code}")

                logger.success(f"{id} | Wallet has been registered to Solayer")
                return
    
        except Exception as ex:
            logger.error(f'{id} | {ex}', traceback.format_exc())
            count_errors+=1
            
            try:
                await extension.close()
            except:
                pass
        
    sleep_duration = random.randrange(NEXT_TX_MIN_WAIT_TIME, NEXT_TX_MAX_WAIT_TIME)
    logger.info(f"{id} | Sleep {sleep_duration}")
    await asyncio.sleep(sleep_duration)
    