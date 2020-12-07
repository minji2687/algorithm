def selection_sort(data):
    for stand in range(len(data)-1):
        lowestIdx = stand
        for index in range(stand, len(data)):
            if data[index] < data[lowestIdx]:
                lowestIdx = index

        data[stand], data[lowestIdx] = data[lowestIdx], data[stand]

    return data


print(selection_sort([5, 4, 34, 5, 23, 53, 44]))
