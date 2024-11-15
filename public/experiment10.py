
import socket

def main():
    link = ""
    while True:
        link = input("Enter the website name: ")
        if link == "end":
            break

        ip_address = socket.gethostbyname(link)
        print("The IP address of {} is {}".format(link, ip_address))
        min_limit = int(input("enter the minimum limit: "))
        max_limit = int(input("enter the maximum limit: "))

        for port in range(min_limit, max_limit):
            try:
                client_socket = socket.socket()
                print("trying to connect to the server", ip_address, "on port", port)
                if client_socket.connect_ex(ip_address, port) == 0:
                    print("port", port, "is open")
                else:
                    print("connection to the server", ip_address, "on port", port, "was failure")
                    client_socket.close()
            except:
                print("connection to the server", ip_address, "on port", port, "was failure")
                client_socket.close()

        link = input("Do you want to continue? (yes/no): ")

    print("scanerr exited")


main()