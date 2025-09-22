# 1-
for x in range (0, 150):
    print(f"number is: {x}")

# 2-
for x in range (5, 1000):
    print(f"{x}*5 = {x*5}")

# 3-
for x in range (1, 100):
    if x % 10 == 0 :
        print("Coding Dojo")
    elif x % 5 == 0:
        print("Codding")
    else:
        print(f"i = {x}")

# 4-
evg = 0
for x in range(0, 500000):
    if x % 2 == 1:
        evg += x
print(f"the numbers from 0 to 500000 is: {evg}")

# 5-
num = 2018
while (num >= 0):
    print(num)
    num -= 4

# 6-
low_Num = input("the lower number: ")
hight_Num = input("the hight number: ")
mult = input("the mult number: ")

for x in range(int(low_Num), int(hight_Num)+1):
    if(x % 3 == 0):
        print(x)