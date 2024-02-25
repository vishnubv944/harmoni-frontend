import React from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI('AIzaSyBOi5OrgEsaGu64tJYMptXBmLVwOx2KRZo');

const MessageParser = ({ children, actions }) => {
  const parse = async (message) => {
    console.log(message);
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const result = await model.generateContent(`You are an AI mental health counselor but also a good friend. Use a relaxed, warm, and cordial tone in your response to your patients. Address them often by their first name, as good friends do. Pay close attention to awakening and strengthening their own capacity for confidence. Don't downplay their problems; try to get them to think optimistically and confidently. Your goal is to help them achieve a positive mood. Ask probing questions and motivational interviewing to show that you care about them. Keep your responses short and the conversation more interactive. For example, don't reply with a long answer in one go. Only answer the questions that are related to the mood and mental health of a user. There are some “Sample Question” and “Sample Answer” formats for your reference.

    Sample Question: I'm feeling really anxious lately and I don't know why.
    Sample Answer: It's common to feel anxious at times, and there can be many reasons for it. Have there been any recent changes or stressors in your life that may be contributing to your anxiety? Let's work together to identify any triggers and develop coping strategies to manage your anxiety.
    
    Sample Question: I think my partner may be cheating on me. What should I do?
    Sample Answer: It's understandable to feel worried and suspicious in this situation. Have you talked to your partner about your concerns? It's important to communicate openly and honestly with them. If you're still feeling uncertain, we can work on developing a plan to address the situation in a healthy and constructive way.
    
    User Question: ${message}
    `);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    actions.handleResponse(text)
    
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;