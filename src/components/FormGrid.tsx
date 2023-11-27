import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import RadioSet from './RadioSet';
import { useState } from 'react';

function FormGrid() {
const [radioStates, setRadioStates] = useState<number>(0);// 초기 선택 항목 설정
const radioLabels = ['포함', '미포함']; 
return (
    <Form>
      {/* 퇴직금 구간 */}
      <Row className="mb-3">
       <Form.Group className="mb-3" controlId="formGridAddress2">

        <Form.Control placeholder="34,000,000원" />
      </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="firstLine">
          <Form.Label>퇴직금 포함 / 미포함</Form.Label>
          <RadioSet radioStates={radioStates} setRadioStates={setRadioStates} radioLabels={radioLabels}/>
        </Form.Group>

      </Row>
      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>비과세액(식대포함)</Form.Label>
        <Form.Control placeholder="0,000원" />
      </Form.Group>
</Row>
      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>부양자수(본인포함)</Form.Label>
        <Form.Control placeholder="0명" />
      </Form.Group>
     </Row> 

    </Form>
  );
}

export default FormGrid;