import random


def bubblesort(data):
    swap = False
    for index in range(len(data)-1):
        for index2 in range(len(data)-index-1):
            if data[index2] > data[index2 + 1]:
                data[index2], data[index2 + 1] = data[index2 + 1], data[index2]
                swap = True

        if swap == False:
            break
    return data


data_list = random.sample(range(100), 50)
bubblesort(data_list)

# 시간분석
# O(n2) 이중 for
