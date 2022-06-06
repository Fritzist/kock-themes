from asyncio import sleep
from time import time

from you import idiot
from iq import average

async def main():
    start = time()
    iq = idiot.test_iq()
    print(f"Testing that idiot took {time() - start} seconds bruh")
    sleep(10)
    if iq > average:
        print("You are officially not an idiot and \
            I quite apologise")
    else:
        print("Just as i thought. Fuck off mate")

