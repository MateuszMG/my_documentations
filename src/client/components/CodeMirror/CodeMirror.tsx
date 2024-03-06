import ReactCodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

interface CodeMirrorProps {
  onChange?: (val: string) => void;
  value: string;
}

export const CodeMirror = ({ onChange, value }: CodeMirrorProps) => {
  return (
    <ReactCodeMirror
      extensions={[javascript({ jsx: true, typescript: true })]}
      minHeight='40px'
      onChange={onChange}
      theme='dark'
      value={value.replace(/    /g, '  ')}
      width='100%'
    />
  );
};
