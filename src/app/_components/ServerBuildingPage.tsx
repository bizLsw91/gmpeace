"use client"
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  font-family: Arial, sans-serif;
  color: #333;
`;

const Content = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
  margin: 20px auto;
`;

export default function ServerBuildingPage(){
    return (
        <Container>
            <Content>
                <Title>서버를 구축 중입니다</Title>
                <Message>2024-08-25일 이내 오픈예정입니다.</Message>
                <Spinner />
            </Content>
        </Container>
    );
};
