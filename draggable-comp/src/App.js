import './App.css';
import DragComp from './Components/DragComp';
import DragCompEvents from './Components/DragCompEvents';
import DragCompAxis from "./Components/DragCompAxis";

function App() {
  return (
    // Simple test case to use Draggable tag in component file (DragComp.js)
    // <div>
    //   <DragComp />
    // </div>

    //Test code using Draggable in main App.js File. But its preffered to use Draggable tag in component file.
    // <Draggable>
    //     <div className="drag-wrapper">
    //     <DragComp />
    //     </div>
    //   </Draggable>

    // Test Case for Events in Draggable component
    // <div>
    // <DragCompEvents />
    // </div>

    //Test case for defining X and Y axis using onDrag event and display value on screen
    <div>
      <DragCompAxis />
    </div>

  );
}

export default App;
