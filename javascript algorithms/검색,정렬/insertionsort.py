def insertion_sort(data):
    for index1 in range(len(data)-1):
        for index2 in range(index1+1, 0, -1):
            if data[index2-1] > data[index2]:
                data[index2-1], data[index2] = data[index2], data[index2-1]
            else:
                break
