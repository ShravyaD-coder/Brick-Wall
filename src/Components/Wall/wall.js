import React from 'react';
import './style.css';
import Brick from '../Brick/Brick.js';

class Wall extends React.Component{


    constructor(props){
        super(props);
        this.state={
            bricks: [1,2,3,4]
        }
    }

    addMoreBricks = () =>{
        console.log("I am getting clicked");

        const newBricksArray = [...this.state.bricks];
        newBricksArray.push(newBricksArray.length + 1);
        //this.state.bricks.push(5)
        //console.log(this.state.bricks); //check the console after inspecting the element 

        this.setState({
            bricks: newBricksArray
        })

    }
    //  render function returns what to display to the user
    render = () => {
        return (
          <div className="wall-container">
              {
                  this.state.bricks.map( (brick) => {
                    return <Brick key={brick} name={brick}/>
                  }) }

                  <button className="add-btn" onClick={this.addMoreBricks}>Add More</button>


          </div>
        );
      };
}
    
 
  export default Wall;