import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import ThemeSwitch from './ThemeSwitch';
import { useContext, useState } from 'react';
import ThemeContext from './ThemeContext';
interface TopNavBarsProps {
  theme: string;
  setTheme: (theme: string) => void;
}
function TopNavBars({theme, setTheme}:TopNavBarsProps) {
  // const [theme, setTheme] = useState(0); // 초기 선택 항목 설정
  return (
    <Navbar data-bs-theme={theme} style={{width:"100%"}}  expand="lg" className="bg-body-tertiary">
      <Container > 
        <Navbar.Brand href="#home">계산기 사이트</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            {/* state로 관리 */}
            <NavDropdown title="급여계산기" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <ThemeSwitch  theme={theme} setTheme={setTheme}/>
      </Container>
    </Navbar>
  );
}

export default TopNavBars;