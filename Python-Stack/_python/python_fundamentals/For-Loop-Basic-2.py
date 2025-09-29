#1- Biggie Size:-
def big_size(rtx):
    for i in range(len(rtx)):
        if rtx [i] >0:
            rtx[i] = "big"
    return rtx
 
print(big_size([-1,-2,4,6,-7,8,-9,22]))


#2- Count Positives:-
def cont_pos(trt):
    cont=0
    for num in trt:
        if num >0:
            cont+= 1
    if trt:
     trt[-1]=cont
    return trt
print(cont_pos([1, 6, -4, -2, -7, -2])) 
print(cont_pos([-1, 1, 1, 1])) 


#3- Sum Total:-
def sum(tmr):
    total=0
    for num in tmr:
        total+= num 
    return total
print(sum([1,2,3,4]))
print(sum([6,3,-2]))


#4-Average:-
def avr(opq):
    total=0
    for num in opq:
        total+=num
    return total/len(opq)


#5- Length:-
def leng(vrt):
    return len(vrt)
print(leng([40,4,6,-2]))
print(leng([]))


#6- Minimum:-
def min(ghr):
    if len(ghr)==0:
        return False
    min_val = ghr[0]
    for num in ghr:
        if num < min_val:
            min_val = num
    return min_val
print(min([37,2,1,-9]))
print(min([]))


#7- Maximum:-
def max(lot):
    if len(lot)==0:
        return False
    max_val = lot[0]
    for num in lot :
        if num >max_val:
            max_val = num
    return max_val


#8- Ultimate Analysis:-
def ultimate_analysis(lst):
    if len(lst) == 0:
        return False
    return {
        'sumTotal': sum_total(lst),
        'average': average(lst),
        'minimum': minimum(lst),
        'maximum': maximum(lst),
        'length': length(lst)
    }

print(ultimate_analysis([37, 2, 1, -9]))
# {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4}



#9- Reverse List:-
def reverse_list(lst):
    left = 0
    right = len(lst) - 1
    while left < right:
        lst[left], lst[right] = lst[right], lst[left]
        left += 1
        right -= 1
    return lst

