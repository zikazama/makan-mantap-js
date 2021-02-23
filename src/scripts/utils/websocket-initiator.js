/* eslint-disable linebreak-style */
import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    console.log(message.data);
    const movie = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: `${message.data}`,
      options: {
        body: message.data,
        image: `${CONFIG.BASE_IMAGE_URL + movie.poster_path}`,
      },
    });
  },
};

export default WebSocketInitiator;
