
import random
import traceback
from utils import  phantom_confirm_tx, switch_to_page_by_title
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
    
    
async def connect_to_solayer(id, context, page):
    
    logger.info(f"{id} | START connect to Solayer")
    

    count_errors = 0
    for _ in range(MAX_RETRY):
        if count_errors > MAX_RETRY:
            logger.error(f"{id} | Error rate of more than {MAX_RETRY} | Skip wallet...")
            return
        if count_errors > 0:
            logger.info(f"{id} | Retry...")
        try:
            await page.goto('http://app.solayer.org/', timeout=20000)
            
            await asyncio.sleep(random.uniform(3, 4))
            await page.click('div:text("Phantom")', timeout=5000)
            
            
            extension = await switch_to_page_by_title(context, 'Phantom Wallet')
            await asyncio.sleep(random.uniform(1, 2))
            await extension.click('button[type="submit"]', timeout=10000)
            await asyncio.sleep(random.uniform(2, 3))
            
            extension = await switch_to_page_by_title(context, 'Phantom Wallet')
            await asyncio.sleep(random.uniform(1, 2))
            await extension.click('button[data-testid="primary-button"]', timeout=10000)
            await asyncio.sleep(random.uniform(4, 5))
            

            logger.success(f"{id} | Wallet has been connected to Solayer")
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
                await page.click('a:text(" Join Discord ")', timeout=5000)
                await asyncio.sleep(random.uniform(1, 2))
                await page.click('a:text(" Follow ")', timeout=5000)
                await switch_to_page_by_title(context, 'Solayer Dashboard | Solana restaking')
            except:
                pass
            
            with open("ref_codes.txt", 'r') as file:
                lines = file.readlines()
            
            if not lines:
                logger.error(f"{id} | ref_codes.txt is empty.")
                return
            
            otp_code = lines[0].strip()
            
            logger.info(f"{id} | Try to regitster with ref: {otp_code}")
            

            input_fields = await page.query_selector_all("ng-otp-input input[type='text']")
            await input_fields[0].fill(otp_code)
                
    
            
            # await page.fill('#ng-otp-input', str(first_line), timeout=5000) 
            
            # Записываем оставшиеся строки обратно в файл
            with open("ref_codes.txt", 'w') as file:
                file.writelines(lines[1:])

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
    