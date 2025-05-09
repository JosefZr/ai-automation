import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();
import * as PusherPushNotifications from "@pusher/push-notifications-web";
import { HelmetProvider } from 'react-helmet-async';
import { ModalProvider } from "./providers/modal-providers.jsx";
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 3000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "wheat",
                color: "black",
              },
            }}
          />
          <ModalProvider>
            <App />
          </ModalProvider>

        </BrowserRouter>
      </HelmetProvider>
    </StrictMode>
  </QueryClientProvider>
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function (registration) {
      console.log('Service Worker registered with scope:', registration.scope);

      // Request permission for notifications
      return Notification.requestPermission();
    })
    .then(function (permission) {
      if (permission === 'granted') {
        console.log('Notification permission granted.');

        // Register device with Pusher Beams
        const beamsClient = new PusherPushNotifications.Client({
          instanceId: '35cd6f1f-efdb-43c0-b321-1500e97dd08d',
        });

        beamsClient.start()
          .then(() => beamsClient.addDeviceInterest('hello'))
          .then(() => console.log('Successfully registered and subscribed!'))
          .catch(console.error);
      }
    })
    .catch(function (error) {
      console.log('Service Worker registration failed:', error);
    });
}

