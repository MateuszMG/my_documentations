import parse from 'html-react-parser';
import { CodeMirror } from '../components/global/CodeMirror/CodeMirror';

type SplitedTextKeys = 'code' | 'text';
type SplitedTexts = {
  name: SplitedTextKeys;
  value: string;
}[];

const splitTexts = (text: string) => {
  const parts = text.split('..s..');
  const result: SplitedTexts = [];

  for (let i = 0; i < parts.length; i++) {
    if (parts[i].includes('..e..')) {
      const code = parts[i].split('..e..')[0].trim();
      if (code) result.push({ name: 'code', value: code });

      const remainingText = parts[i].split('..e..')[1].trim();
      if (remainingText) result.push({ name: 'text', value: remainingText });
    } else {
      result.push({ name: 'text', value: parts[i].trim() });
    }
  }

  return result;
};

const parseTextToCodeMirror = (text: string) =>
  text
    .replace(/&amp;/g, '&')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&nbsp;/g, ' ')
    .replace(/<p>/g, '\n')
    .replace(/<br \/>/g, '')
    .replace(/<\/p>/g, '');

export const parsePost = (post: string) =>
  splitTexts(post).map((item) =>
    item.name === 'text' ? (
      parse(item.value)
    ) : (
      <CodeMirror value={parseTextToCodeMirror(item.value)} />
    ),
  );
