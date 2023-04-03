import './App.css';
import Image from './Image';
import Image2 from './Image2';
import staringCat from './Images/staringCat.jpg'

function App() {
  return (
    <main>
      <Image source={ staringCat } alternativeText="Cute cat staring" />
      <Image2 source={ staringCat } alternativeText="Cute cat staring" />
    </main>
  );
}

export default App;
