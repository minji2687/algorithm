# 작은 문제들을 해결해서 작은문제의 결과값을 가지고 큰 문제를 해결한다
# 작은문제를 저장하는 것을 memoization이라고 함

# reculsive call 활용
def fibo(num):
    if num <= 1:
        return num
    return fibo(num-1)+fibo(num-2)


fibo(4)

# fibo(4) = fibo(3) + fibo(2)
# fibo(3) = fibo(2) + fibo(1)
# fibo(2) = fibo(1) + fibo(0)

# 동적계획법 활용 (dynamic programing)


def fibo_dp(num):
    # 메모이제이션기법 활용
    cache = [0 for index in range(num + 1)]
    cache[0] = 0
    cache[1] = 1

    for index in range(2, num+1):
        cache[index] = cache[index - 1] + cache[index - 2]

    return cache[num]

# 동일한 부분문제에 대해서 계속 계산을 할 필요가 없기 때문에 속도가 훨씬 빠르다.
