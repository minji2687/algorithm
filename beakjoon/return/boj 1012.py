# 어려워서 나중에 다시봐야...

T = int(input())
B, ck = [], []

dx, dy = [0, -1, 0, 1], [-1, 0, 1, 0]


def dfs(i, j):
    if ck[i][j] == 1:
        return
    ck[i][j] = 1
    for i in range(4):
        xx, yy = i + dx[i], j + dy[i]
        if B[xx][yy] == 0 or ck[xx][yy] == 1:
            continue
        dfs(xx, yy)


def process():
    M, N, K = map(int, input().split())
    B = [[0 for _ in range(M+2)] for _ in range(N + 2)]
    ck = [[0 for _ in range(M+2)] for _ in range(N + 2)]
    for _ in range(K):
        X, Y = map(int, input().split())
        B[X][Y] = 1
    ans = 0

    for i in range(1, N+1):
        for j in range(1, M + 1):
            if ck[i][j]:
                continue
            dfs(i, j)
            ans += 1
    print(B)


for _ in range(T):
    process()
