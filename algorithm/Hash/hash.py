# key와 value를 저장하는 데이터 구조
# 딕셔너리 타입을 사용

# 해쉬테이블 만들기

hash_table = list([0 for i in range(10)])
print(hash_table)

# 해쉬함수 만들기 Division방식 (나누기를 통한 나머지를 사용하는 기법)

def hash_func(key):
    return key % 5

data1 = 'Andy'
data2 = 'Dave'
data3 = 'Trump'

# ord()문자의 ASCII아스키코드 리턴
# 지원되지 않은 언어가 많아서 지금은 유니코드가 널리쓰임
print(hash_func(ord(data1[0])))

def storage_data(data, value):
    key = ord(data[0])
    hash_address = hash_func(key)
    hash_table[hash_address] = value

storage_data('Andy','01033339999')
storage_data('Dave','01044449559')
storage_data('Trump','01055559669')

def get_data(data):
    key = ord(data[0])
    hash_address = hash_func(key)
    return hash_table[hash_address]