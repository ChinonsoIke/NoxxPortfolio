import Button from "./components/atoms/button/button.component";
import Image from "./components/atoms/image/image.component";
import Noxx from './assets/images/noxx.jpg'
import Text from "./components/atoms/text/text.component";
import Hero from "./components/organisms/hero/hero.component";
import Home from "./components/pages/home/home.component";

function App() {
  return (
    <div className="App">
      {/* <Text size={"2.5rem"} weight={"700"} color={"green"} text={"ADevCalledNoxx"}/>
      <Button bg="yellow" text={"Learn More"} textColor={"#F87575"}/>
      <Image src={Noxx} borderRadius="50%" /> */}
      {/* <Hero /> */}
      <Home />
    </div>
  );
}

export default App;
