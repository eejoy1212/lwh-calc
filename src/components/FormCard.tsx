import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BtnDropDown from './BtnDropDown';
import FormGrid from './FormGrid';
import Row from 'react-bootstrap/esm/Row';
interface FormCardProps {
   theme:string; 
  }
function FormCard({theme}:FormCardProps) {
  return (
    <Card data-bs-theme={theme} style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title style={{width:'100%',display:'flex',gap:'10px',alignItems:'center',justifyContent:'center'}}>현재 <BtnDropDown/> 입력</Card.Title>
      <FormGrid/>
      <Row className="mb-3" style={{width:'100%' ,display:'flex', alignItems:'center',justifyContent:'center',gap:'20px'}}>  
      
      <Button variant="secondary" style={{width:'100px'}}>초기화</Button>
      <Button variant="primary" style={{width:'100px'}}>계산하기</Button></Row>
      
      </Card.Body>
    </Card>
  );
}

export default FormCard;