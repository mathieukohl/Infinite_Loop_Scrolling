import one from './img/1.jpg'
import two from './img/2.jpg'
import three from './img/3.jpg'
import four from './img/4.jpg'
import five from './img/5.jpg'
import six from './img/6.jpg'
import Lenis from '@studio-freight/lenis'
import './App.css';

const lenis = new Lenis({
  smooth: true,
  infinite: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// repeat first six items by cloning them and appending them to the .grid
const repeatItems = (parentEl, total = 0) => {
  const items = [...parentEl.children];
  for (let i = 0; i <= total-1; ++i) {
      var cln = items[i].cloneNode(true);
      parentEl.appendChild(cln);
  }
};
repeatItems(document.querySelector('.grid'), 6);

function App() {
  return (
    <div className="grid">
      <div className="grid__item" style={{ backgroundImage: `url(${one})` }}></div>
      <div className="grid__item" style={{ backgroundImage: `url(${two})` }}></div>
      <div className="grid__item" style={{ backgroundImage: `url(${three})` }}></div>
      <div className="grid__item" style={{ backgroundImage: `url(${four})` }}></div>
      <div className="grid__item" style={{ backgroundImage: `url(${five})` }}></div>
      <div className="grid__item" style={{ backgroundImage: `url(${six})` }}></div>
    </div>
  );
}

export default App;
