//React: Render State in the User Interface
/*In the code editor, MyComponent is already stateful. Define an h1 tag in the component's render method which renders the value of name from the component's state. */

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      return (
        <div>
          {    /*Define an h1 tag in the component's render method which renders the value of name from the component's state. */}
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };