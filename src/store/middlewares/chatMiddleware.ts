import { Middleware } from 'redux';
import {
  connectionEstablished,
  receiveMessage,
  sendMessage,
  startConnecting
} from '../chat/reducer';
import firebaseAuth from '../../.firebase/firebaseConfig';

const chatMiddleware: Middleware = (store) => {
  let ws: WebSocket;

  return (next) => (action) => {
    const isConnectionEstablished = ws && store.getState().chat.isConnected;

    if (store.getState().authentication.isAuthenticated && startConnecting.match(action)) {
      let token: string;
      firebaseAuth.currentUser?.getIdToken().then((idToken) => {
        token = idToken;
        ws = new WebSocket(
          `${process.env.REACT_APP_MESSAGING_SERVICE}?uid=${firebaseAuth.currentUser?.uid}` ?? ''
        );
        ws.onopen = () => {
          store.dispatch(connectionEstablished());
          ws.send(JSON.stringify({ token, requestType: 5 }, null, 2));
        };
        ws.onmessage = (e: MessageEvent) => {
          const msg = JSON.parse(e.data);
          store.dispatch(receiveMessage(msg));
        };
      });
    }
    if (sendMessage.match(action) && isConnectionEstablished) {
      const messageData = JSON.stringify(action.payload, null, 2);
      ws.send(messageData);
    }

    return next(action);
  };
};

export default chatMiddleware;
