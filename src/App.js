import { Card, CardContent } from "@mui/material";
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import RoutesOne from "./pages/routes/routes";

function App() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Router>
          <RoutesOne />
        </Router>
      </CardContent>
    </Card>
  );
}

export default App;
