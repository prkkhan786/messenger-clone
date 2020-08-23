import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./message.css";
const Message = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username;
  const user = message.username === "" ? "unknown user" : message.username;
  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__usercard" : "message_guest__card"}>
        <CardContent>
          <Typography color="white" variant="h4" component="h2">
            {" "}
            {username === message.username ? "" : user + ": "} {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
