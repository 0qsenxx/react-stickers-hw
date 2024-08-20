import "./App.css";
import StickersList from "./components/StickersList/StickersList";
import stickers from "./stickers.json";
// console.log(stickers);

function App() {
  return (
    <>
      <StickersList stickers={stickers} />
    </>
  );
}

export default App;
