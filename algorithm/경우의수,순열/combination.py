candidate = [2, 3, 6, 7]
target = 7


def combinationSum(candidate, target):
    result = []

    def dfs(csum, index, path):
        print(csum, index, path)
        if csum < 0:
            return

        if csum == 0:
            result.append(path)
            return

        for i in range(index, len(candidate)):
            dfs(csum - candidate[i], i, path + [candidate[i]])

    dfs(target, 0, [])

    return result


print(combinationSum(candidate, target))
