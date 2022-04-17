import "../styles/globals.css";
import Layout from "../components/Layout";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider, useSelector } from "react-redux";
import store from "../app/store";
import { AppContext, socket } from "../context/appContext";
import { useState } from "react";

const persistedStore = persistStore(store);

function MyApp({ Component, pageProps }) {
  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState("");
  const [currentRoom, setCurrentRoom] = useState("");
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [privateMemberMessage, setPrivateMemberMessage] = useState({});
  const [newMessages, setNewMessages] = useState({});
  const [loading, setLoading] = useState(false);

  const providerValue = {
    socket,
    rooms,
    setRooms,
    roomName,
    setRoomName,
    messages,
    setMessages,
    newMessages,
    setNewMessages,
    currentRoom,
    setCurrentRoom,
    members,
    setMembers,
    privateMemberMessage,
    setPrivateMemberMessage,
    loading,
    setLoading,
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <AppContext.Provider value={providerValue}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppContext.Provider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
