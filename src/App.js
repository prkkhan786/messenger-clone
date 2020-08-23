import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Button,
  Input,
  FormControl,
  InputLabel,
  Icon,
  IconButton,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Message from "./Message.js";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessage] = useState([]);
  const [name, setUsername] = useState("");

  useEffect(() => {
    //run once app component load
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessage(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        ); //it is watching for the change al the time // it is real time databse
      });
  }, []);

  useEffect(() => {
    //run the code once as the condition is []
    setUsername(prompt("Enter your name "));
  }, []);

  const senMessage = (event) => {
    event.preventDefault();
    //all the logic to send a message

    db.collection("messages").add({
      message: input,
      username: name,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // setMessage([...messages, { username: name, message: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"></img>
      <div className="app__headings">
        <h1>Parvez's Messenger</h1>

        <h2>Welome {name} </h2>
      </div>

      <form className="app__form">
        <FormControl className="app__formcontrol">
          <Input
            className="app__input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Enter your message"
          />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            type="submit"
            onClick={senMessage}
            color="secondary"
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map((message) => (
          <Message key={message.id} username={name} message={message.data} />
          // <p key={i}>{message}</p>
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
