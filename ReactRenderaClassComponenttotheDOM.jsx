//React: Render a Class Component to the DOM
/*
Both the Fruits and Vegetables components are defined for you behind the scenes. Render both components as children of the TypesOfFood component, then render TypesOfFood to the DOM. There is a div with id='challenge-node' available for you to use.
*/

class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          {/* Render both components as children of the TypesOfFood component */}
          <Fruits />
          <Vegetables />
  
          {}
        </div>
      );
    }
  };
  //ReactDOM.render(<ComponentToRender />, targetNode)
  /* The TypesOfFood component should render to the DOM within the div with the id challenge-node.*/
  ReactDOM.render(
    <TypesOfFood />,
    document.getElementById('challenge-node'));