import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/react';

const LibraryPage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Library</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div
        style={{
          display: 'flex',
          flexDirection:'column',
          alignItems: 'center',
          // height: '100%',
          marginBottom: '35px'
        }}
      >
        <IonCard href={'https://www.mind.org.uk/information-support/tips-for-everyday-living/adhd-and-mental-health/'}>
            <IonCardHeader>
              <IonCardTitle>ADHD and mental health</IonCardTitle>
            </IonCardHeader>

          <IonCardContent>Attention deficit hyperactivity disorder (ADHD) can be a lifelong condition. You might start to experience symptoms in childhood and find that they continue into your teenage years and as an adult.</IonCardContent>
          <IonButton fill="clear">Read More</IonButton>
        </IonCard>



        <IonCard href='https://www.mind.org.uk/information-support/types-of-mental-health-problems/anxiety-and-panic-attacks/about-anxiety/'>
          <IonCardHeader>
            <IonCardTitle>Anxiety and panic attacks</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>Explains anxiety and panic attacks, including possible causes and how you can access treatment and support. Includes tips for helping yourself, and guidance for friends and family.</IonCardContent>
          <IonButton fill="clear">Read More</IonButton>
        </IonCard>


        <IonCard href={'https://www.mind.org.uk/information-support/types-of-mental-health-problems/depression/'}>
            <IonCardHeader>
              <IonCardTitle>Depression</IonCardTitle>
            </IonCardHeader>

          <IonCardContent>We all have times when our mood is low, and we feel sad or fed up. Often these feelings happen for a reason and pass on their own.</IonCardContent>
          <IonButton fill="clear">Read More</IonButton>
        </IonCard>
        
      </div>
    </IonContent>
  </>
);

export default LibraryPage;