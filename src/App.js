import "./App.css";
import Route from "./routes/route";

// redux routes
import { Provider } from "react-redux";

// persist storage
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Route />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
