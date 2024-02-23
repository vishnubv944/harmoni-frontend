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
        Maps content
      </div>
    </IonContent>
  </>
);

export default SearchPage;