import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BtnDropDown from './BtnDropDown';
import FormGrid from './FormGrid';
import Row from 'react-bootstrap/esm/Row';
interface ValueCardProps {
   theme:string; 
  }
function ValueCard({theme}:ValueCardProps) {
  return (
    <Card data-bs-theme={theme} style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title style={{width:'100%',display:'flex',gap:'10px',alignItems:'center',justifyContent:'center'}}>월 예상 실수령액</Card.Title>
      {/* <FormGrid/> */}
<Row> <Card data-bs-theme={theme==='dark'?'light':'dark'}>
<Card.Body > <Card.Text style={{display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'800',fontSize:'30px'}}>3,000,000 만원</Card.Text></Card.Body>

       
     </Card></Row>
   
      </Card.Body>
    </Card>
  );
}

export default ValueCard;