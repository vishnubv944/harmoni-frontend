import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const handleResponse = (response) => {
    const botMessage = createChatBotMessage(response);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };





  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {handleResponse},
        });
      })}
    </div>
  );
};

export default ActionProvider;