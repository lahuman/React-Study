import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import ContextSample from './ContextSample';
import Counter from './Counter';
import User from './User';
import ErrorBoundary from './ErrorBoundary';
import * as Sentry from '@sentry/browser';
import Button from './components/Button';

Sentry.init({
  dsn:
    'https://26781886aee34eaca58c5fdc8aacc395@o377526.ingest.sentry.io/5199757',
});

ReactDOM.render(
  <React.StrictMode>
    <App />
    {
      // <Counter />
      // <ContextSample />
      // <ErrorBoundary>
      //   <User />
      // </ErrorBoundary>
      // <div className="App">
      //   <div className="buttons">
      //     <Button size="large" color="blue">
      //       BUTTON
      //     </Button>
      //     <Button size="medium" color="blue">
      //       BUTTON
      //     </Button>
      //     <Button size="small" color="blue">
      //       BUTTON
      //     </Button>
      //   </div>
      //   <div className="buttons">
      //     <Button size="large" color="pink">
      //       BUTTON
      //     </Button>
      //     <Button size="medium" color="pink">
      //       BUTTON
      //     </Button>
      //     <Button size="small" color="pink">
      //       BUTTON
      //     </Button>
      //   </div>
      //   <div className="buttons">
      //     <Button size="large" color="gray">
      //       BUTTON
      //     </Button>
      //     <Button size="medium" color="gray">
      //       BUTTON
      //     </Button>
      //     <Button size="small" color="gray">
      //       BUTTON
      //     </Button>
      //   </div>
      //   <div className="buttons">
      //     <Button size="large" color="blue" outline>
      //       BUTTON
      //     </Button>
      //     <Button size="medium" color="gray" outline>
      //       BUTTON
      //     </Button>
      //     <Button size="small" color="pink" outline>
      //       BUTTON
      //     </Button>
      //   </div>
      //   <div className="buttons">
      //     <Button size="large" color="blue" fullWidth>
      //       BUTTON
      //     </Button>
      //     <Button size="medium" color="gray" fullWidth>
      //       BUTTON
      //     </Button>
      //     <Button
      //       size="small"
      //       color="pink"
      //       fullWidth
      //       onClick={(e) => {
      //         console.log('클릭');
      //       }}
      //     >
      //       BUTTON
      //     </Button>
      //   </div>
      // </div>
    }
  </React.StrictMode>,
  document.getElementById('root')
);
