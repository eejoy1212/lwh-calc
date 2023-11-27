import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function BtnDropDown() {
    const [selected, setSelected] = useState('year'); // 초기 선택 항목 설정

    const handleSelect = (e: any) => {
        setSelected(e);
        console.log(e);
    };

    return (
        <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selected==='year' ? '연봉' : '월급'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey="year">연봉</Dropdown.Item>
                <Dropdown.Item eventKey="month">월급</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default BtnDropDown;