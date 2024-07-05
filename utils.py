import asyncio
import random
import string

import pandas

from loguru import logger
from playwright.async_api._generated import Page


async def switch_to_page_by_title(context, title) -> Page:
    for _ in range(50):
        for page in context.pages:
            # print([await page.title()])
            if title == await page.title():
                await page.bring_to_front()  # Переключаемся на страницу
                # print(await page.title())
                return page
        await asyncio.sleep(0.5)
    return None  

async def phantom_confirm_tx(context):
    extension = await switch_to_page_by_title(context, 'Phantom Wallet')
    await asyncio.sleep(random.uniform(1, 2))
    await extension.click('button[data-testid="primary-button"]', timeout=20000)
    return True


def get_format_proxy(proxy):
    login_password, address_port = proxy.split('@')
    address, port = address_port.split(':')
    login, password = login_password.split(':')
    return address, port, login, password


def get_accounts():
    with open('Accounts.xlsx', 'rb') as file:
        try:
            wb = pandas.read_excel(file, sheet_name="Accounts")
        except Exception as ex:
            logger.error(ex)
            raise ex
        
        accounts_data = {}
        for index, row in wb.iterrows():
            private_key = row["Private Key"]
            proxy = row["Proxy"]
            accounts_data[int(index) + 1] = {
                "private_key": private_key,
                "proxy": proxy,
            }
                    
        accounts = []
        for k, v in accounts_data.items():
            accounts.append((
                k,
                v['private_key'], 
                v['proxy'] if isinstance(v['proxy'], str) else None,
            ))
        return accounts



def generate_random_email():
    # Сгенерируем случайное имя пользователя
    username_length = random.randint(5, 10)  # Длина имени пользователя от 5 до 10 символов
    username = ''.join(random.choices(string.ascii_lowercase + string.digits, k=username_length))
    
    # Сгенерируем случайный домен
    domain_length = random.randint(5, 10)  # Длина домена от 5 до 10 символов
    domain = ''.join(random.choices(string.ascii_lowercase + string.digits, k=domain_length))
    
    # Определим доменную зону
    tld = random.choice(['com', 'net', 'org', 'io', 'biz'])

    # Соберем полный адрес электронной почты
    email = f"{username}@{domain}.{tld}"
    
    return email