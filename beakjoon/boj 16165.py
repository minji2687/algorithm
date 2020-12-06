N, M = map(int, input().split())


team = {}
team_member = {}

for i in range(N):
    team_name = input()
    team_num = int(input())
    team[team_name] = []
    for j in range(team_num):
        name = input()
        team[team_name].append(name)
        team_member[name] = team_name

for i in range(M):
    quize = input()
    ox = int(input())
    if ox == 1:
        print(team_member[quize])
    else:
        for mem in sorted(team[quize]):
            print(mem)
