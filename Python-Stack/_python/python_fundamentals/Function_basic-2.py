print("The answer 1:")
# 1-
def countdown(num): # creat a func Returns a descending list from the given number up to 0
    return list(range(num, -1, -1)) # The range method : range(start, stop, step)

print(countdown(5))  

print("The answer 2:")

# 2-
def print_and_return(lst): # creat a func Prints the first item from the list and returns the second.
    print(lst[0])   # print the first item
    return lst[1]   # returns the second

print(print_and_return([1, 2]))  # print 1 and return 2

print("The answer 3:")

# 3-
def f_plus_length(lst):
    return lst[0] + len(lst)

print(f_plus_length([1, 2, 3, 4, 5]))  # 6

print("The answer 4:")

# 4-
def values(lst):
    if len(lst) < 2:
        return False
    new_list = [x for x in lst if x > lst[1]]
    print(len(new_list))  # اطبع عدد القيم
    return new_list

print(values([5, 2, 3, 2, 1, 4]))  
print(values([3]))  # False

print("The answer 5:")

# 5-
def length(size, value):
    return [value] * size

print(length(4, 7))  # [7, 7, 7, 7]
print(length(6, 2))  # [2, 2, 2, 2, 2, 2]

