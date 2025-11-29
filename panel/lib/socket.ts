export function initSocket(callback: (data: any) => void) {
  const socket = new WebSocket('ws://localhost:8765');
  socket.onmessage = (event) => {
    try {
      const parsed = JSON.parse(event.data);
      callback(parsed);
    } catch (e) {
      console.error('Invalid data:', event.data);
    }
  };
  return socket;
}
