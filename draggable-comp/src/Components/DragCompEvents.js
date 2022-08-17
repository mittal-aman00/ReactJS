import React , { Component } from "react";
import Draggable  from "react-draggable";

class DragCompEvents extends Component {

    eventControl = (event, info) => {
        console.log('Event name: ', event.type);
        console.log(event, info);
      }

    render() {
        return(
    <Draggable
          onDrag={this.eventControl}
          onStart={this.eventControl}
          onStop={this.eventControl}
          onMouseDown={this.eventControl}
          onMouseUp={this.eventControl}
          onTouchStart={this.eventControl}
          onTouchEnd={this.eventControl} >
        <div className="drag-wrapper">
          <div>Drag Me</div>
        </div>
      </Draggable>
        )
    }
}

export default DragCompEvents