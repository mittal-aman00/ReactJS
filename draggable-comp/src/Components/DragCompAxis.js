import React , { Component } from "react";
import Draggable from "react-draggable";
import DragCompEvents from "./DragCompEvents";

class DragCompAxis extends Component {

    // initialize values for x and y and store in deltaxy array
    state = { axisxy : {
                x : 0,
                y : 0
                }
    };
    
    // implement method eventControl and take params in event and info.
    //Info has 2 params deltaX and deltaY having values of the distance moved in 1 drag
    eventControl = (event , info) => {
        const {x , y} = this.state.axisxy;
        this.setState({
            deltaxy: {
                x: x + info.deltaX,
                y: y + info.deltaY
            }
        });

    };

    render() {

        //define object deltaxy which can get the x and y values from eventControl
        const {axisxy} = this.state;

        return(
    <Draggable
          onDrag={this.eventControl}>
        <div className="drag-wrapper">
          <div>Drag Me</div>
          {/* display the value of x and y from deltaxy */}
          <div>
              X: {axisxy.x} , 
              Y: {axisxy.y}
          </div>
        </div>
      </Draggable>
        )
    }
}

export default DragCompAxis
