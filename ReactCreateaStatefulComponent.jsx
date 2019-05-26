//React: Create a Stateful Component

/* There is a component in the code editor that is trying to render a name property from its state. However, there is no state defined. Initialize the component with state in the constructor and assign your name to a property of name.*/


class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);
      //Initialize the component with state in the constructor
      this.state = {
        //Assign your name to a property of name.     
        name: "Bugs Bunny"
      }
  
    }
    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };