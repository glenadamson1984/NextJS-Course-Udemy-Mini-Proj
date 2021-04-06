import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import { createContext, useState, useEffect } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: (notificationData) => {},
  hideNotification: () => {},
});

export const NotificationContextProvider = ({ children }) => {
  const [activeNotification, setActiveNotification] = useState(null);
  useEffect(() => {
    if (
      activeNotification && (activeNotification.status === "success" ||
      activeNotification.status === "error")
    ) {
        const timer = setTimeout(() => {
            setActiveNotification(null);
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }
  }, [activeNotification]);

  const showNotificationHandler = (notificationData) => {
      setActiveNotification(notificationData);
  };

  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };

  const context = {
      notification: activeNotification,
      showNotification: showNotificationHandler,
      hideNotification: hideNotificationHandler
  }

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
