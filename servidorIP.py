from audioop import add
import socket 

host , port = '192.168.0.4' , 8888

serversocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
serversocket.setsockopt(socket.SOL_SOCKET , socket.SO_REUSEADDR , 1)
serversocket.bind((host , port))
serversocket.listen(1)
print('servidor en el puerto',port)

while True:
    connection , address = serversocket.accept()
    request = connection.recv(1024).decode('utf-8')

    try:
        file = open('ip.html' , 'rb')
        response = file.read()
        file.close()
        response=response.decode('utf-8').replace("reemplazar",address[0])
        header = 'HTTP/1.1 200 OK\n\n'

    except Exception as e:
        print(e)
        header = 'HTTP/1.1 404 Not Found\n\n'
        response = '<html><body>Error 404: File not found</body></html>'

    final_response = header.encode('utf-8')
    final_response += response.encode('utf-8')
    connection.send(final_response)
    connection.close()
    print('enviado')
