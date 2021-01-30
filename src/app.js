import Header from './components/Header';
import User from './components/User';

async function App() {
  const template = document.createElement('template');
  template.innerHTML = `
    <div class="container">
      ${Header()}
      ${await User()}
    </div>
  `;

  return template.content.cloneNode(true);
}

export default App;
