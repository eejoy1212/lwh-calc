import Form from 'react-bootstrap/Form';
interface ThemeSwitchProps {
   
    theme:string;
    setTheme: (prev: string) => void;
  
  }
function ThemeSwitch({theme, setTheme}:ThemeSwitchProps) {
    const handleThemeChange = (prev: string) => {
        console.log(prev);
     setTheme(prev);
    };
  return (
    <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        onChange={(v) => handleThemeChange(theme==='dark' ?'light' :'dark')}
        // label="Check this switch"
      />
   
    </Form>
  );
}

export default ThemeSwitch;