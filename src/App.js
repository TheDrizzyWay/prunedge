import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Sidebar from './containers/Sidebar';
import Content from './containers/Content';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <Sidebar />
        <Content />
      </div>
    </Provider>
  );
}

export default App;
