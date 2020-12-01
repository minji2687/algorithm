# 동전의 개수를 가장 작게 써서 해당 돈을 쓰는 문제

coin_list = [1000, 100, 50, 10]


def min_coin_count(value, coin_list):
    detail = list()
    total_coin_count = 0

    coin_list.sort(reverse=True)

    for coin in coin_list:
        coin_num = value // coin  # 몫을 구함
        total_coin_count += coin_num
        value -= coin * coin_num
        detail.append([coin, coin_num])

    return total_coin_count


# 무게제한이 k인 배낭에 최대가치를 가지도록 물건을 넣는 문제
# (가치,무게)
data_list = [(10, 10), (15, 12), (20, 10), (25, 8), (30, 5)]


# 무게대비 가치가 높은 순으로 정렬

def get_max_value(data_list, capacity):
    data_list = sorted(data_list, key=lambda x: x[1]/x[0], reverse=True)
    total_value = 0
    details = list()

    for data in data_list:
        if capacity - data[0] >= 0:
            capacity -= data[0]
            total_value += data[1]
            details.append([data[0], data[1], 1])
        else:
            fraction = capacity/data[0]
            capacity -= data[0] * fraction  # 원래 이런코드가 들어가야 하나, 안들어가도됨
            total_value += fraction * data[1]
            details.append([data[0], data[1], fraction])

    return total_value, details
