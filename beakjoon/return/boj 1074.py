# Z
# 이해안되.........

N, r, c = map(int, input().split())


def Z(sz, r, c):
    if sz == 1:
        return 0
    sz //= 2
    print('sz:', sz)

    for i in range(2):
        for j in range(2):
            # (0,0)(0,1)(1,0)(1,1)
            if r < sz * (i + 1) and c < sz * (j + 1):
                return (i*2+j) * sz*sz + Z(sz, r - sz - i, c - sz - j)


print(Z(2**N, r, c))
