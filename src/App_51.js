import './App_51.scss';
import { Switch, Route } from 'react-router-dom';

import Homepage_51 from './pages/Homepage_51';
import Header_51 from './components/Header_51';
import ShopOverviewPage_51 from './pages/ShopOverviewPage_51';
import SiginPage_51 from './pages/SiginPage_51';
import ContactPage_51 from './pages/ContactPage_51';

function App_51() {
  return (
    <div>
      <ShopOverviewPage_51 />
      {/* <Header_51 />
      <Switch>
        <Route exact path="/" component={Homepage_51} />
        <Route exact path="/shop_51" component={ShopOverviewPage_51} />
        <Route exact path="/contact_51" component={ContactPage_51} />
        <Route exact path="/signin_51" component={SiginPage_51} />
      </Switch> */}
    </div>
  );
}

export default App_51;
