import { SubscribeMessage, WebSocketGateway,  OnGatewayConnection, WebSocketServer, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;
  handleConnection(socket: Socket) {
    console.log('Client connected:', socket.id);
  }

  handleDisconnect(socket: Socket) {
    console.log('Client disconnected:', socket.id);
  }
  @SubscribeMessage('send-message')
  handleSendMessage(
    @MessageBody() data: { message: string },
  ) {
    console.log('Received message:', data.message);
    this.server.emit('receive-message', { message: data.message });
  }
}
