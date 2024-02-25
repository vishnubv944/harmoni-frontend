import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

const SearchPage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Maps</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        Locate nearby mental health centers through "nearby places api"
      </div>
    </IonContent>
  </>
);

export default SearchPage;