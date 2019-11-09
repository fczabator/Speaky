import { useState } from 'react';
import constate from 'constate';

const useNotification = () => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const showNotification = (message: string) => {
    setMessage(message);
    setVisible(true);
    setTimeout(() => setVisible(false), 3000);
  };

  return { isVisible, message, showNotification };
};

export const [NotificationProvider, useNotificationContext] = constate(
  useNotification
);
