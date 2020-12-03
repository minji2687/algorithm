N, nLst = int(input()), list(map(int, input().split()))
M, mLst = int(input()), list(map(int, input().split()))


for i in mLst:
    if i in nLst:
        print(1)
    else:
        print(0)


# 다른 풀이

N, A = int(input()), {i: 1 for i in map(int, input().split())}
# comprehension 표현법으로 딕셔너리를 바로 만들 수 있다.

M = input()

for i in list(map(int, input().split())):
    # print(A.get(i, 0))
    print(1 if i in A else "false")
