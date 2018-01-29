import React from "react";
//imported the react-router
/*
	No more backend routes to connect to your front end files
	All front end routes are now done strictly on the front end, through react
*/
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

/*
	this is where your routes are setup
	they are imported into the app.js file
*/
export default (
  	<Switch>
    	<Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
    </Switch>
);
