N, M = map(int, input().split())

team = {}  # team{팀 이름 :[멤버,멤버...]}
team_member = {}  # team_member{멤버 : 팀이름, 멤버 : 팀이름,..}
for group in range(N):
    team_name, member_num = input(), int(input())
    team[team_name] = []
    for j in range(member_num):
        name = input()
        team[team_name].append(name)
        team_member[name] = team_name

print(team)
print(team_member)

for i in range(M):
    name, q = input(), int(input())
    if q:
        print(team_member[name])
    else:
        for mem in sorted(team[name]):
            print(mem)
