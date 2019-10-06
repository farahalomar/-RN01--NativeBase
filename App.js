import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';

export default function App() {
  return (
    <Container>
    <Content>
    <Header>
          <Left>
            <Button transparent>
              <Icon type="FontAwesome" name='camera' />
            </Button>
          </Left>
          <Body>
            <Title>InstaCoded</Title>
          </Body>
          <Right>
          <Button transparent>
            <Icon type="Entypo" name='direction'/>
          </Button>
          </Right>
        </Header>  
      <Card>
      
     
      <CardItem>
              <Body>
                <Image source={{uri: 'https://media.licdn.com/dms/image/C4D0BAQHLyZXsUy3iaw/company-logo_200_200/0?e=2159024400&v=beta&t=S_5-JHuojwlJxNHjGWaz1dj5TkdcMOWC9Mm0rzvrYFo'}} style={{height: 200, width: 200, flex: 1}}/>
               
              </Body>
            </CardItem>
            
        <Footer>
          <Left>
            <Button transparent>
              <Icon type="SimpleLineIcons" name="heart"/><Icon type="SimpleLineIcons" name="bubble"/><Icon type="Entypo" name='direction'/>
            </Button>
          
          </Left>
        </Footer>
     </Card>
    </Content>
  </Container>

       


  
  );
};

