nums = [1, 2, 3]

# 경로 path를 만들어 나가면서 인덱스를 1씩 증가하는 형태로 깊이 탐색한다.
# 별도의 종료조건 없이 탐색이 끝나면 함수가 종료됨


def subset(nums):
    result = []

    def dfs(index, path):
        # print(index,path)
        result.append(path)

        for i in range(index, len(nums)):
            # print(i,path+[nums[i]])
            dfs(i + 1, path + [nums[i]])

    dfs(0, [])
    return result


print(subset(nums))
