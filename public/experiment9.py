

import socket


def main():
    print("DNS Lookup")
    link = ""
    while(link != "exit"):
        link = input("enter the website name:")
        if link != "exit":
            host = socket.gethostbyname(link)
            print("The IP address of {} is {}".format(link, host))

    print("closed")

main()