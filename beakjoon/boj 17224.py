N, L, K = map(int, input().split())

hard, easy = 0, 0
for i in range(N):
    sub1, sub2 = map(int, input().split())
    if sub2 <= L:
        hard += 1
    elif sub1 <= L:
        easy += 1

hardnum = min(hard, K)
easynum = min(K - hardnum, easy)
print(hardnum * 140 + easynum * 100)
