import random


def qsort(data):
    if len(data) < 1:
        return data

    left, right = list(), list()
    pivot = data[0]

    for index in range(len(data)):
        if data[index] < pivot:
            left.append(data[index])
        elif data[index] > pivot:
            right.append(data[index])

    return qsort(left) + [pivot] + qsort(right)


data_list = random.sample(range(100), 10)
qsort(data_list)
