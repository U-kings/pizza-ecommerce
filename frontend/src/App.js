import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { logoutAdmin } from "./actions/auth";
// import { useSelector, useDispatch } from "react-redux";
// import { decode } from "jsonwebtoken";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faUser,
  faMoneyCheck,
  faHouseUser,
  faHandHoldingUsd,
  faArrowLeft,
  faEye,
  faEdit,
  faPlus,
  faTrashAlt,
  faUserTag,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  Home,
  Signup,
  Signin,
  Orders,
  Productdetails,
  Saveditems,
  Checkout,
  Aboutus
} from '@pages/index';
import { GlobalStyle } from "./globalStyles";
library.add(
  fab,
  faBars,
  faUser,
  faMoneyCheck,
  faHouseUser,
  faUserTag,
  faHandHoldingUsd,
  faArrowLeft,
  faEye,
  faEdit,
  faCalendarAlt,
  faTrashAlt,
  faPlus
);

function App() {
  return (
    <Router>
      <GlobalStyle />
      {/* <Redirect from="/" to="/signin" /> */}
      <Switch>
        {/* <Route exact path="/" component={Main} /> */}

        <Route exact path="/" component={Home} />

        {/* <Route exact path="/signup" render={() => <Signup />} /> */}

        {/* <Route exact path="/signin" render={() => <Signin />} /> */}

        <Route exact path="/product-details" component={Productdetails} />

        <Route exact path="/saveditems" component={Saveditems} />

        <Route exact path="/orders" component={Orders} />

        <Route exact path="/checkout" component={Checkout} />

        <Route exact path="/cart" component={Cart} />

        <Route exact path="/about" component={Aboutus} />
      </Switch>
    </Router>
  );
}

export default App;
