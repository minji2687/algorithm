# Mixing Milk

# C, M = list(), list()

# for i in range(3):
#     a, b = map(int, input().split())
#     C.append(a)
#     M.append(b)
# 용량과 우유를 따로 관리하는 배열을 만듬
# 이렇게 하면 가독성이 높아짐

C, M = [0, 0, 0], [0, 0, 0]

for i in range(3):
    C[i], M[i] = map(int, input().split())

for i in range(100):
    # print(index) 012012..
    # idx = i % 3
    # nextIdx = (idx + 1) % 3
    idx, nextIdx = i % 3, (i + 1) % 3
    M[idx], M[nextIdx] = max(
        M[idx]-(C[nextIdx] - M[nextIdx]), 0), min(C[nextIdx], M[idx] + M[nextIdx])


for i in M:
    print(i)
