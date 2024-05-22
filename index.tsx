// pages/index.jsx
import { h, renderSSR } from 'https://deno.land/x/nano_jsx/mod.ts';
import MyComponent from './components/MyComponent.jsx';

export default () => {
    const element = <MyComponent />;
    return renderSSR(element);
};
