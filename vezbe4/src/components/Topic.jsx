import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { topicMessage, getMsnOnTpc } from "../utility/forum-services";


const Topic = ({ match, user:{username} }) => {
  const [TopicID] = useState(match.params.topic_id);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  function handleSubmit() {
    topicMessage( username, TopicID, message ).then(data => {
      console.log(data);
      getMsnOnTpc(TopicID).then(data => setMessages(data.messages));
    });
    setMessage('')
  }
  console.log(TopicID);
  useEffect(() => {
    getMsnOnTpc(TopicID).then(data => {
      if (data.success) {
        setMessages(data.messages);
      } else {
        console.log(data);
      }
    });
  }, [TopicID]);

  return (
      <>
    <form className="postojecaTema">
      <h3>Topic Messages</h3>
      <div className="poruke">
        <h3>Topic Messages:</h3>
        <ul>
          {messages.map(message => (
            <li>{message.message.toString()}</li>
          ))}
        </ul>
      </div>
      <input
        className="input-nova-poruka"
        type="text"
        placeholder="New message"
        value={message}
        required
        onInput={e => {
          setMessage(e.target.value);
        }}
      />{" "}
      <br />

      <input
        className="dugme"
        type="submit"
        value="SEND"
        onClick={e => {
          e.preventDefault();
          handleSubmit();
        }}
      />
    </form>
    </>
  );
};
export default Topic;