//React: Pass State as Props to Child Components
/*The MyApp component is stateful and renders a Navbar component as a child. Pass the name property in its state down to the child component, then show the name in the h1 tag that's part of the Navbar render method. */

class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'CamperBot'
      }
    }
    render() {
      return (
         <div>
         {/*Pass the name property in its state down to the child component*/}
           <Navbar name = {this.state.name} />
         </div>
      );
    }
  };
  
  class Navbar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
      <div>
      {/*The h1 element in Navbar should render the name prop.*/}
        <h1>Hello, my name is: {this.props.name} </h1>
      </div>
      );
    }
  };