import { Socket } from 'socket.io';
import * as express from 'express';
import * as httpServer from 'http';
import * as spcketIO from 'socket.io';

const app = express();
const http = httpServer.createServer(app);
const io = spcketIO(http);

const socketPort = 4001;

const namespace = '/decoder';

/**
 * Declare REST related routes below
 */
app.get('/test', function(_req, res) {
  res.json({
    test: 'This is a test message from REST',
  });
});

/**
 * Declare socket.io replated routes below
 */

io.of(namespace).on('connection', function(_socket: Socket) {
  console.log('a user connected');
  _socket.on('disconnect', () => {
    console.log(`client disconnected: ${_socket.client.id}`);
  });
});

http.listen(socketPort, function() {
  console.log(`listening on *:${socketPort}`);
});
