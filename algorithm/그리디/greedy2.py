# 거스름돈
n = 1260
count = 0

array = [500, 100, 50, 10]

for coin in array:
    count += n // coin
    n = n % coin

print(count)


# 1이 될 때 까지
n, k = 1534, 5

result = 0

while True:
    target = (n//k) * k
    result += (n - target)
    n = target

    if n < k:
        break

    n //= k

result += (n-1)
print(result)


# 곱하기 혹은 더하기
data = '43254'

result = int(data[0])
for i in range(1, len(data)):
    num = int(data[i])
    if num <= 1 or result <= 1:
        result + num
    else:
        result * num

print(result)
