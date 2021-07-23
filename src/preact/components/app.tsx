import { FunctionalComponent, h } from 'preact';

import Content from './browserWindow';
import Header from './header';

const App: FunctionalComponent = () => {
  return (
    <div id="preact_root">
      <Header />
      <Content />
    </div>
  );
};

export default App;
