
# register_or_login_to_solayer - логин или регистрация по инвайт коду на https://app.solayer.org/
# restake_on_solblaze - обмен SOL на bSOL через сайт https://stake.solblaze.org/app/
# deposit_bsol - депозит bSOL
# deposit_sol - депозит SOL
# claim_episod_1 - клейм
LIST_OF_ACTIONS = ["register_or_login_to_solayer", "claim_episode_1"] # порядок действий


### Solayer deposit

AMOUNT_SOL = [0.0001, 0.0005] # количество обычной соланы, которое нужно занести в Solayer
AMOUNT_SOL_TO_BSOL = [0.0005, 0.001] # количество соланы, которое нужно обернуть в bSOL на https://stake.solblaze.org/app/ и занести в solayer


# Количество потоков
THREADS_NUM = 1

USE_PROXY = False

# Максимальное количество попыток сделать действие
MAX_RETRY = 10 


# Время ожидания между каждым действием одного аккаунта
NEXT_TX_MIN_WAIT_TIME = 5   # В секундах
NEXT_TX_MAX_WAIT_TIME = 10  # В секундах