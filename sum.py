def sum(args):
    sum_of_args = 0
    for i in args:
        sum_of_args += i
    return sum_of_args

ages = [2, 3]
result = sum(ages)
print(result)
