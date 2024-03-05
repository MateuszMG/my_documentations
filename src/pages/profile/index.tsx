import { Button } from '@/client/components/Button/Button';
import { CodeMirror } from '@/client/components/CodeMirror/CodeMirror';
import { Form } from '@/client/components/Form/Form';
import { parseTextToCodeMirror, splitTexts, useProfile } from './useProfile';
import { Wysiwyg } from '@/client/components/Wysiwyg/Wysiwyg';
import parse from 'html-react-parser';

export default function Page() {
  const {
    codeMirrorValue,
    control,
    copyCode,
    errors,
    loading,
    onSubmit,
    preview,
    setCodeMirrorValue,
  } = useProfile();

  const formatedText = splitTexts(preview).map((item) =>
    item.name === 'text' ? (
      parse(item.value)
    ) : (
      <CodeMirror value={parseTextToCodeMirror(item.value)} />
    ),
  );

  return (
    <div>
      <h1>Profile</h1>
      <CodeMirror
        value={codeMirrorValue}
        onChange={(value) => setCodeMirrorValue(value)}
      />

      <Button onClick={copyCode}>Copy</Button>

      <Form onSubmit={onSubmit} width={'100%'}>
        <Wysiwyg control={control} error={errors.post?.message} name={'post'} />

        <Form.ButtonsWrapper>
          <Button isLoading={loading} type='submit'>
            Submit
          </Button>
        </Form.ButtonsWrapper>
      </Form>

      <br />
      <br />
      <br />

      <div>{formatedText}</div>
    </div>
  );
}
