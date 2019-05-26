//React: Review Using Props with Stateless Functional Components
/*The code editor has a CampSite component that renders a Camper component as a child. Define the Camper component and assign it default props of { name: 'CamperBot' }. Inside the Camper component, render any code that you want, but make sure to have one p element that includes only the name value that is passed in as a prop. Finally, define propTypes on the Camper component to require name to be provided as a prop and verify that it is of type string.*/


class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper/>
        </div>
      );
    }
  };
  // change code below this line
  /*Define the Camper component*/
  class Camper extends React.Component {
    render() {
  /*make sure to have one p element that includes only the name value that is passed in as a prop */
      return <p>{this.props.name}</p>;
    }
  }
  /*And assign it default props of { name: 'CamperBot' }*/
  Camper.defaultProps = { name: 'CamperBot' }
  /*Define propTypes on the Camper component to require name to be provided as a prop and verify that it is of type string. */
  Camper.propTypes = {name: PropTypes.string.isRequired}