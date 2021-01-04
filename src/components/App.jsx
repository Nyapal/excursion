import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Beta from './Beta';
import Dashboard from './Dashboard';
import Destination from './Destination';
import Existing from './Existing';
import Guests from './Guests';
import Home from './Home';
import Authentication from './Authentication';
// import TravelDates from './TravelDates';
import TripDetails from './TripDetails';

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={Beta} />
      <Route path="/excursion" exact component={Home} />
      <Route path="/auth" component={Authentication} />
      <Route path="/destination" component={Destination} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/existing" component={Existing} />
      <Route path="/guests" component={Guests} />
      {/* <Route path="/travel-dates" component={TravelDates} /> */}
      <Route path="/tripDetails" component={TripDetails} />
    </div>
  </Router>
);

export default App;
