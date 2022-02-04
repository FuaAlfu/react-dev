import './App.css';
// import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Link, Route,Routes } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

function App() {
  /**
   * including the old version 
   */
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        {/* <Switch> */}
        <Routes>
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route path="/" component={Home} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/about">
            <About />
          </Route> */}
           <Route path="/about" element={<About />} />
          {/* <Route path="/products/:id">
            <ProductDetails />
          </Route> */}
          <Route path="/products/:id" element={<ProductDetails />} />
          {/* <Route path="/products">
            <Products />
          </Route> */}
          <Route path="/products" element={ <Products />} />
          {/* we could inline some jsx template inside the element props, insted referencing these other droop in page components */}
          {/* example: look at test route */}
          <Route path="/test" element={(
               <div>
                    <h2>test page..</h2>
               </div>
          )}/>
        {/* </Switch> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
