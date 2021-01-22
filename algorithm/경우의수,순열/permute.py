n = 3
array = []

for i in range(1, n+1):
    array.append(i)


def permute(array):

    results = []
    prev_elements = []

    def dfs(array):
        if len(array) == 0:
            results.append(prev_elements[:])

        for e in array:
            next_e = array[:]
            next_e.remove(e)

            prev_elements.append(e)
            dfs(next_e)
            prev_elements.pop()

    dfs(array)
    return results


print(permute(array))
