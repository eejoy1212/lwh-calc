import React, { useState } from "react";
import "./App.css";
import styled, { ThemeContext } from "styled-components";
import Main from "components/Main";
import TopNavBars from "components/TopNavBars";
import FormCard from "components/FormCard";
import Row from "react-bootstrap/esm/Row";
import ValueCard from "components/ValueCard";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column; /* 수정 */
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
display: flex; /* 수정 */
flex: 1; /* 추가 */
width: 100%;
justify-content: center; /* 수정 */
align-items: center; /* 수정 */
`;
const Menu = styled.div`
  width: 100%;
  height: 50px;
  background-color: #4caf50; /* 메뉴의 배경색 */
  color: white; /* 메뉴의 글자 색상 */
`;
const App: React.FC = () => {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (<Container style={{backgroundColor:theme==='dark'?' #1E1E1E':'white'}}>    
      <TopNavBars theme={theme} setTheme={setTheme}/>
      {/* 계산기 종류별로 화면 전환 */}
      <Wrapper>
<Row style={{gap:'20px'}}><FormCard theme={theme}/>

<ValueCard theme={theme}/>
</Row>

      </Wrapper>
    </Container>
   
  );
}

export default App;
