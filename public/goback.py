


def main():
    windowsize = int(input("enter the window size: "))
    sent = 0
    while True:
        for i in range(windowsize):

            sent += 1 
            print("frame {} has been transimitted: ".format(sent))

            if (windowsize == sent):
                break
        ack = int(input("enter the number of frame recieved: "))
        if ack == windowsize:
            break
        else:
            sent = ack


main()


   
