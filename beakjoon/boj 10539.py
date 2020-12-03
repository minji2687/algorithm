N, B = int(input()), list(map(int, input().split()))


A = [0 for i in B]
A[0] = B[0]

for i in range(1, N):
    A[i] = B[i] * (i + 1) - sum(A)

# print(A)

# [1] 2 * 2 - 1 = 3
# [2] 2 * 3 - 4 = 3
# [3] 3 * 4 - 5 = 7
for i in B:
    print(i, end=' ')
