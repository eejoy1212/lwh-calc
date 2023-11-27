import Form from 'react-bootstrap/Form';

interface RadioSetProps {
  radioStates: number;
  setRadioStates: (index: number) => void;
  radioLabels: string[];

}

function RadioSet({ radioStates, radioLabels,setRadioStates }: RadioSetProps) {
  const handleRadioChange = (index: number) => {
    console.log(index);
   setRadioStates(index);
  };

  return (
    <Form>
      <div key={`inline-radio`} className="mb-3">
        <Form.Check
          inline
          label={radioLabels[0]}
          name={radioLabels[0]}
          type={"radio"}
          id={`inline-radio-1`}
          checked={radioStates === 0}
          onChange={(v) => handleRadioChange(0)}
        />
        <Form.Check
          inline
          label={radioLabels[1]}
          name={radioLabels[1]}
          type={"radio"}
          id={`inline-radio-2`}
          checked={radioStates === 1}
          onChange={(v) => handleRadioChange(1)}
        />
      </div>
    </Form>
  );
}

export default RadioSet;