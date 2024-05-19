import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Navbar from 'react-bootstrap/Navbar'; // Import Navbar component from React Bootstrap
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from 'react-bootstrap/Container'; // Import Container component from React Bootstrap
import Dropdown from './components/dropdown'; // Import your Dropdown component

function App() {
  return (
    <div>
			<Navbar bg="dark" variant="dark" expand="lg">
				<Container>
					<Navbar.Brand href="#home">NEWS VECTORS</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#home">Java</Nav.Link>
							<Nav.Link href="#c++">C++</Nav.Link>
							<Nav.Link href="#android">Android</Nav.Link>
							<Nav.Link href="#spring">Springboot</Nav.Link>
							<Nav.Link href="#python">Python</Nav.Link>
							<NavDropdown title="Web Technology"
										id="collasible-nav-dropdown">
								<NavDropdown.Item href="#web/3.1"> React </NavDropdown.Item>
								<NavDropdown.Item href="#web/3.2"> Angular </NavDropdown.Item>
								<NavDropdown.Item href="#web/3.3"> HTML </NavDropdown.Item>
								<NavDropdown.Item href="#web/3.3"> CSS </NavDropdown.Item>
								<NavDropdown.Item href="#web/3.3"> Javascript </NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
            <Container >
                <Dropdown />
            </Container>
		</div>
  );
}

export default App;


/*
// App.js
import React from "react";


import "./App.css";
class App extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
 
        this.state = {
            items: [],
            DataisLoaded: false,
        };
        this.options = [
            {
              id: 1,
              name: 'Leanne Graham'
            },
            {
              id: 2,
              name: 'Ervin Howell'
            }
          ];
    }

    
      


    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true,
                });
            });
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded)
            return (
                <div>
                    <h1> Pleses wait some time.... </h1>
                </div>
            );
 
        return (
            <div className="App">

                <h1 className="geeks">Stock Price Forecast/Correlation/</h1>
                <h3>Tomorrow's Prediction:</h3>
                <div>
                <label>
                    Select Stock:
                    <select className="select" name="selectedFruit">                    
                        {items.map((item) => (                      
                            <option value={item.id}>
                                {item.username}
                            </option>                        
                        ))}
                    </select>
                </label>
                </div>
                <div className="container">
                    {items.map((item) => (
                        <div className="item">
                            <ol key={item.id}>
                                <div>
                                    <strong>
                                        {"User_Name: "}
                                    </strong>
                                    {item.username},
                                </div>
                                <div>
                                    Full_Name: {item.name},
                                </div>
                                <div>
                                    User_Email: {item.email}
                                </div>
                            </ol>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
 
export default App;

*/