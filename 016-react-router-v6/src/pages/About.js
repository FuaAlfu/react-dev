import { Route, useNavigate } from "react-router-dom"
// import { Route,useHistory } from "react-router-dom" //old :: version 5

// nested routes
import Offers from "./Offers"

export default function About() {
  // const history = useHistory() //hook
  const navigate = useNavigate();
  return (
    <div className="content">
      <h2>About Us</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tempora nisi eligendi quod ut illo cumque quibusdam reprehenderit veniam. Cum eaque, nostrum fugit ut inventore assumenda perspiciatis sed maiores numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nam repellat hic dolore officia sequi quis quod commodi iusto doloremque. Corporis in et placeat unde sapiente perspiciatis minus! Recusandae, ad!</p>
      
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tempora nisi eligendi quod ut illo cumque quibusdam reprehenderit veniam. Cum eaque, nostrum fugit ut inventore assumenda perspiciatis sed maiores numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nam repellat hic dolore officia sequi quis quod commodi iusto doloremque. Corporis in et placeat unde sapiente perspiciatis minus! Recusandae, ad!</p>

      {/* <button onClick={() => history.push("/products")}>see our products</button> */}
       <button onClick={() => navigate("/products")}>see our products</button>
      {/* nested route */}
      {/* <Route path="/about/offers">
        <Offers />
      </Route> */}
    </div>
  )
}