import Container from "./components/Container";
import { createStore } from 'redux';
import { Provider } from "react-redux";
import reducer from "./redux/reducer";
const store = createStore(reducer);

function App() {
  return <Provider store={store}>
    <main className="w-full min-h-screen flex justify-center items-center">
      <Container />
    </main>
  </Provider>
}

export default App;
