import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import { ChatbubblesOutline } from 'react-ionicons'


/* Theme variables */
import './theme/variables.css';

import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';

import { chatbubbleOutline, calendarNumberOutline, libraryOutline, mapOutline } from 'ionicons/icons';

import AIChatBot from './pages/AIChatBot';
import Appointments from './pages/Appointments';
import LibraryPage from './pages/LibraryPage';
import Maps from './pages/Maps';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          {/*
          Use the render method to reduce the number of renders your component will have due to a route change.

          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
          <Route path="/chat" render={() => <AIChatBot />} exact={true} />
          <Route path="/appointments" render={() => <Appointments />} exact={true} />
          <Route path="/library" render={() => <LibraryPage />} exact={true} />
          <Route path="/maps" render={() => <Maps />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/chat">
          <IonIcon icon={chatbubbleOutline} />
          <IonLabel>Chat</IonLabel>
          </IonTabButton>

          <IonTabButton tab="radio" href="/appointments">
          <IonIcon icon={calendarNumberOutline} />
            <IonLabel>Appointments</IonLabel>
          </IonTabButton>

          <IonTabButton tab="library" href="/library">
            <IonIcon icon={libraryOutline} />
            <IonLabel>Resources</IonLabel>
          </IonTabButton>

          <IonTabButton tab="search" href="/maps">
            <IonIcon icon={mapOutline} />
            <IonLabel>Maps</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
