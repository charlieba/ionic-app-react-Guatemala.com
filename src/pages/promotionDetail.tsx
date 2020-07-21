import {
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonText
  } from '@ionic/react';
  
  import React from 'react';
  import axios from 'axios';
  
  import './Home.css';
  
  const API_KEY = "";
  const URL = `http://localhost:8000/api/promocion`;
  
  const fetchPromotions = () => {
  
    return axios({
      url: URL,
      method: 'get'
    }).then(response => {
  
      console.log(response);
      return response.data;
    })
  };
  
  const HomePage: React.FunctionComponent = () => {
  
    const [articles, setPromotions] = React.useState([]);
    const items: any[] = [];
  
    React.useEffect(() => {
  
      fetchPromotions().then(data => setPromotions(data));
  
    }, []);
  
    return (
      <>
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Promociones Guatemala.com</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent color="primary" >
          <IonList color="primary">
  
            {
              articles.map(a => {
                
                return (
                <IonItem button onClick={() => { }}>
                <IonLabel>
                  <IonText>
                    <h3>{a['title']}</h3>
                  </IonText>
                </IonLabel>
                </IonItem>
                );
              })
            }
  
          </IonList>
        </IonContent>
      </>
    );
  };
  
  export default HomePage;
  