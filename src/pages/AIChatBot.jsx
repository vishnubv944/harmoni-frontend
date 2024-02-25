import React from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonTitle, IonToolbar } from '@ionic/react';
import './AIChatBot.css';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../AIChatBotFiles/config';
import MessageParser from '../AIChatBotFiles/MessageParser'
import ActionProvider from '../AIChatBotFiles/ActionProvider'


import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI('AIzaSyBOi5OrgEsaGu64tJYMptXBmLVwOx2KRZo');



function HomePage() {
 
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chat With AI</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </IonContent>
    </>
  );
}

export default HomePage;