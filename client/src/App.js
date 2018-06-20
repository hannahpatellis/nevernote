/* We have to import React from the react module
   every time we have a React component.
   Make sure the `from "react"` line has react in lower-case
*/
import React from "react";
/* Next we need to import BrowserRouter (`as Router` renames that component to just Router)
   and also Route from the react-router-dom module.
   Make sure to do a `yarn add react-router-dom` from within the /client folder to install it
   and make it available for React to use
*/
import { BrowserRouter as Router, Route } from "react-router-dom";

/* Next we import any components we are going to reference from within this
   component.

   Our /pages components are going to be parent components with represent full pages
   that can stand by themselves whereas /components components are going to be 
   bits of UI elements that aren't going to be used by themselves.
*/
import Welcome from "./pages/Welcome";
import List from "./pages/List";
import Details from "./pages/Details";

import Navbar from "./components/Navbar";

/* We're next going to make a stateless component function for the App component.
   This App component doesn't preform any logic so it doesn't need to carry a state or have
   methods that need to be referenced
*/
const App = () => (
  /* When using `react-router-dom` the parent-most component is 
     always Router and we put it in the App.js component because it's the first
     to load.

     Router requires a single child which is why we wrap everything else inside an 
     empty div.

     Inside that empty div are any components we want to be rendered on every page
     followed by our Route components.

     Route components function kind of like if/else statements. If the path is matched
     then it will load the associated component and only the associated component.

     In the last Route (/todo/:id) we are defining a route that can have anything after
     the /todo part. It will store whatever string is after /todo/ in a property called
     `id`. This will be referenced and accessable by the `Details` component.
  */
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Welcome} />
      <Route exact path="/list" component={List} />
      <Route exact path="/todo/:id" component={Details} />
    </div>
  </Router>
);

export default App;
