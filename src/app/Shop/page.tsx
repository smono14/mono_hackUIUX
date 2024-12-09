import GreenHeader from "../components/green-header";
import Carasho from "../components/carasho";
import GreenDiv from "../components/green-div";
import Navbarsho from "../components/navbarsho";
import ProductCard from "../components/products-card";
import Whitediv from "../components/white-dic";

function Shop(){
    return(
        <div>
          <GreenHeader/>
          <Navbarsho/>
          <Carasho/>
          <ProductCard/>
          <GreenDiv/>
          <Whitediv/>     
        </div>
    )
}
export default Shop