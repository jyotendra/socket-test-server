import { Socket } from 'socket.io';
import * as httpServer from 'http';
import * as spcketIO from 'socket.io';

var http = httpServer.createServer();
var io = spcketIO(http);

const socketPort = 4001;

const namespace = '/decoder';

io.of(namespace).on('connection', function(_socket: Socket) {
  console.log('a user connected');
  _socket.on('disconnect', () => {
    console.log(`client disconnected: ${_socket.client.id}`);
  });
});

http.listen(socketPort, function() {
  console.log(`listening on *:${socketPort}`);
});
