import { Card, CardContent } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import RoutesOne from "./pages/routes/routes";
import { Provider } from "react-redux";
import configureAppStore from "./redux/store";
import {PersistGate} from 'redux-persist/integration/react';

function App() {
  const { store, persistor } = configureAppStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Router>
              <RoutesOne />
            </Router>
          </CardContent>
        </Card>
      </PersistGate>
    </Provider>
  );
}

export default App;
