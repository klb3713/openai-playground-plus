import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '',
  baseURL: '',
  dangerouslyAllowBrowser: true,
});

export default openai;
