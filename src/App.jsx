import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import FlightsSchedule from './flights/components/flights-schedule/FlightsSchedule.jsx';
import store from './store.js';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <FlightsSchedule />
    </Provider>
  </BrowserRouter>
);

export default App;
