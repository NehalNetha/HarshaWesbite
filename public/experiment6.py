import numpy as np

def xor(a, b):
    return [i ^ j for i, j in zip(a, b)]

def encode(data_input , key):
    data = data_input[:]
    temp = data + [0] * (len(key) - 1)  # Append (key length - 1) zeros

    for _ in range(len(data)):
        if temp[0] == 1:
            temp = xor(temp, key)  # XOR with key if first bit is 1
        else:
            temp = xor(temp, [0] * len(key))  # XOR with zeros if first bit is 0
        temp = temp[1:] + [0]  # Shift left

    remainder = temp[:len(key) - 1]  # Only take (key length - 1) remainder bits
    print("Remainder: ", remainder)
    
    data_crc = data + remainder  # Append remainder to data
    print("encoded Data with CRC: ", data_crc)
    return data_crc

def decode(data_input , key):
    temp = data_input[:]

    for _ in range(len(data_input) - (len(key) - 1)):  # Process until only remainder is left
        if temp[0] == 1:
            temp = xor(temp, key)
        else:
            temp = xor(temp, [0] * len(key))
        temp = temp[1:] + [0]  # Shift left

    remainder = temp[:len(key) - 1]  # Take the remainder bits
    print("Remainder: ", remainder)
    return remainder

# Example usage:
data_input = [int(x) for x in input("Enter data bits separated by space: ").split()]
key = [int(x) for x in input("Enter the key separated by space: ").split()]
encoded_data = encode(data_input,key)

encode_data_input = [int(x) for x in input("Enter encoded data bits separated by space: ").split()]
if decode(encode_data_input, key) == [0] * (len(key) - 1):  # Check for a 0 remainder
    print("no error")
else:
    print("error")
