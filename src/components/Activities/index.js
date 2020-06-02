import React from "react";
import { Feather, MaterialCommunityIcons , AntDesign} from '@expo/vector-icons';
import { StatusBar } from 'react-native';

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Data,
  Actions,
  Option,
  OptionLabel
} from "./styles";
import avatar from "../../images/avatar.png";

export default function Activities() {
  
  return (
    <Container>
      <StatusBar barStyle='light-content' />
      <Header>
        <Title>Atividades</Title>
      </Header>
      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@rafaelinacio</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <UserName>Rafael Inácio</UserName>
        </CardBody>
        <CardFooter>
          <Details>
            <Value>R$50,00</Value>
            <Divider />
                <Feather name='lock' color='#fff' size={14} />
                <Data>Há 9 anos</Data>
          </Details>
          <Actions>
              <Option>
                <MaterialCommunityIcons name='comment-outline' size={14} color='#fff' />
                <OptionLabel>21</OptionLabel>
              </Option>
              <Option>
                <AntDesign name='hearto' size={14} color='#fff' />
                <OptionLabel>4</OptionLabel>
              </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
