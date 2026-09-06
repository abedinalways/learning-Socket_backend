const io = require('socket.io-client');
const socket = io('http://localhost:4000');
socket.on('connect', () => {
  console.log('yes!!!Connected to server');
  console.log('Socket ID:', socket.id);
});
socket.on('new-message', (data) => {
  console.log('Received new message:', data);
});