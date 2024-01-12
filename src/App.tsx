import { useState } from "react";
import Alert from "./components/Alert";
import { Button } from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Alert!</Alert>
      )}
      <Button
        color="primary"
        onClick={() => setAlertVisibility(true)}
        children={"My button"}
      />
    </div>
  );
}

export default App;
