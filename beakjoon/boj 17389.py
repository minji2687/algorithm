N, S = int(input()), input()
# print(N,S)
bonus = 0
score = 0
for i in range(1, N):
    if S[i-1] == 'X':
        bonus = 0
    elif S[i-1] == 'O':
        score += i
        score += bonus
        bonus += 1


print(score)

# enumerate를 사용해서 for 문을 사용하면
# index와 value를 함께 얻을수 있어서 편함.

for idx, ox in enumerate(S):
    if ox == 'O':
        score = idx + 1 + bonus
        bonus += 1
    else:
        bonus = 0

print(score)

# 채점에서는 정답이 아니라고 표기되서 다시 수정해보고 재출해야함
# 왜그런지 모르겠네......
