import random

def randInt(min =0 ,max =100):
    return random.randint(min,max)
print(randInt())
print(randInt(main = 90))
print(randInt(max = 10))
print(randInt())

def  rand():
    num = random.random()*50 + 10 
    return round(num)

print(rand())