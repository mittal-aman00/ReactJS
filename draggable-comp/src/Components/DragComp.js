import React , { Component } from "react";
import Draggable from "react-draggable";

class DragComp extends Component {

    render() {
        return(
                <div className="drag-wrapper">
                <button>Drag Me.</button>
                </div>
        )
    }
}

export default DragComp