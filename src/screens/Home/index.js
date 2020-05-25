import React from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { StatusBar } from 'react-native';

import {
  Wrapper,
  Header,
  Container,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from "./styles";

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';


export default function Home() {
  return (
    <Wrapper>
      <StatusBar backgroundColor='#000' barStyle='light-content' />
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color="#10c863"
          />
          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$0,00</Balance>
          </BalanceContainer>
          <AntDesign name="gift" size={30} color="#10c863" />
        </Header>
        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
}
