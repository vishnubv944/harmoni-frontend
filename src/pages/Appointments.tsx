import React, { useState } from 'react';
import { IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonList, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';

function Appointments () {


  return(
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Appointments</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
          }}
        >
        <IonSegment value="default">
          <IonSegmentButton value="default">
            <IonLabel>Support Buddies</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="segment">
            <IonLabel>Doctors</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        List of support buddies & doctors through which users can connect through text & video 
        
          
        



        </div>

      </IonContent>
    </>
  )

  
};

export default Appointments;