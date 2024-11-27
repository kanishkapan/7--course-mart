import FeaturesSection from "./components/FeaturesSection";
import Header from "./components/Header";
import ImportedVibes from "./components/ImportVibes";
import InstagramAdScreen from "./components/InstagramAdScreen";
import InstagramImage from "./components/InstagramImage";
import ProductCard from "./components/ProductsCard";
import SnacksSection from "./components/SnackSection";
import YourWordsOurHype from "./components/YourWordsOurHype";
  import UniqueScreen from "./components/UniqueScreen";
  import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    
    <Header/>
    <SnacksSection/>
    <UniqueScreen/>
    <ImportedVibes/>
    <ProductCard/>
    <FeaturesSection/>
    
    <InstagramAdScreen/>
    <InstagramImage/>
    
    <YourWordsOurHype/>
    <Footer/>
    </>
  
  )
}