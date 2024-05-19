


import React from "react";


import "./App.css";
import { useEffect, useState } from "react";

function componentDidMount(){
  console.log("done");
  fetch("http://localhost:8000/fetchemail")
  .then((res) => {res.json()
	alert(res.json());
  })
  .then((json) => {
      this.setState({
          items: json,
          DataisLoaded: true,
      });
  });
}






function App() {
	// Setting up the initial states using
	// react hook 'useState'
	const [search, setSearch] = useState("");
	const [stock, setstock] = useState([]);





	return (
		<div className="App">
			<h1>Select Stock</h1>
			<input
				type="text"
				placeholder="Search..."
				onChange={(e) => {
          componentDidMount();
					setSearch(e.target.value);
				}}
			/>
			<table>
				<thead>
        {/* <tr>
          <td class="rank-column">Rank</td>
          <td class="name-column">Name</td>
          <td class="news-column">News</td>
          <td class="sentiment-column">Sentiment</td>
          <td class="weight-column">Weight</td>
          <td class="forecast-column">Forecast</td>
        </tr> */}
				</thead>
				{/* Mapping all the stocks */}
				<tbody>
					{/* Filtering to check for the searched stock */}
					{stock
						.filter((val) => {
							return val.name.toLowerCase().includes(search.toLowerCase());
						})
						.map((val, id) => {
							return (
						<>  
                <tr> 
                </tr>
            </>
                  
								
							);
						})}
				</tbody>
			</table>
		</div>
	);
}

export default App;
