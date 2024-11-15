



def main():
    incoming , store = 0, 0
    bucket_size = int(input("Enter the bucket size: "))
    outgoing = int(input("Enter the outgoing rate: "))  

    n = int(input("Enter the number of inputs: "))


    while(n > 0):
        incoming = int(input("Enter the incoming packet size: "))
        print("Incoming packet size is", incoming)
        if (incoming <= (bucket_size - store)):
            store += incoming
            print("Bucket buffer size is", store, "out of", bucket_size)
        else:
            print("Packet loss", incoming - (bucket_size - store))
            print("Bucket buffer size is", store, "out of", bucket_size)
            store = bucket_size
        
        store -= outgoing
        if (store < 0):
            store = 0;  
        
        print("After outgoing", store, "packets left out of", bucket_size)
        n -= 1

main()




def main():
    incoming, store = 0, 0
    bucket_size = int(input("enter the bucket size"))
    outgoing_rate = int(input("enter the outgoging rate size"))
    n = int(input("enter the n size"))

    while(n > 0):
        incoming = int(input("enter the incomong packet size"))
        if(incoming < (bucket_size - store)):
            store += incoming
            print("the buffer size is", store, "out of", bucket_size)
        else:
            print("the packet loss is", store, "out of", incoming - (bucket_size - store))
            store = bucket_size
        

        store -= outgoing_rate
        if (store < 0):
            store = 0




