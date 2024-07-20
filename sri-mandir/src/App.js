import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Puja from './pages/Puja';
import PujaBookings from './components/PujaBookings';
import pujafulldetails from './pages/pujafulldetails';
import PujaReview from './pages/PujsReview';
import PujaDetailFormLast from './pages/PujaDetailFormLast'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/puja" component={Puja} />
        <Route path="/profile/bookings" component={PujaBookings} />
        <Route path='/puja-full-details' component={pujafulldetails}/>
        <Route path='/puja-review'component={PujaReview}/>
        <Route path='/Puja-Detail-Form-Last' component={PujaDetailFormLast}/>
      </Switch>
    </div>
  );
}

export default App;
