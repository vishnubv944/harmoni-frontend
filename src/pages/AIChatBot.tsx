import React from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonTitle, IonToolbar } from '@ionic/react';
import './AIChatBot.css';
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI('AIzaSyBOi5OrgEsaGu64tJYMptXBmLVwOx2KRZo');

function HomePage() {
  const msgerForm : any = get(".msger-inputarea");
const msgerInput : any = get(".msger-input");
const msgerChat: any = get(".msger-chat");

const BOT_MSGS = [
  "Hi, how are you?",
  "Ohh... I can't understand what you trying to say. Sorry!",
  "I like to play games... But I don't know how to play!",
  "Sorry if my answers are not relevant. :))",
  "I feel sleepy! :("
];

// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
const BOT_NAME = "Mental Health Assistant";
const PERSON_NAME = "Sajad";

function onClickHandler() {

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";

  botResponse();
};

async function appendMessage(name: string, img: string, side: string, text: string) {
  
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = text

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const responseText = response.text();
  console.log(responseText);


  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-msg">

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
        </div>

        <div class="msg-text">${responseText}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse() {
  const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
  }, delay);
}

// Utils
function get(selector: string, root = document) {
  return root.querySelector(selector);
}

function formatDate(date: Date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chat With AI</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <section className="msger">
    <header className="msger-header">
      
    </header>
  
    <main className="msger-chat">
      <div className="msg left-msg">
  
        <div className="msg-bubble">
          <div className="msg-info">
            <div className="msg-info-name">Mental Health Assistant</div>
          </div>
  
          <div className="msg-text">
            Hey!.. I am here to help you out with your issues.. please tell me about them!
          </div>
        </div>
      </div>
  
      
    </main>
  
    <form className="msger-inputarea">
      <IonInput className="msger-input" placeholder="Enter your message..." />
      <IonButton  className="msger-send-btn">Send</IonButton>
    </form>
  </section>
      </IonContent>
    </>
  );
}

export default HomePage;