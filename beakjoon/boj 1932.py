N = int(input())
A = [[0 for _ in range(N+1)] for i in range(N+1)]
print(A)

for i in range(1, N+1):
    temp = list(map(int, input().split())
    for j in range(1, i+1):
        A[i][j]=temp[i][j]

    print(A)
