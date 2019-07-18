import React from 'react'
import imgUrl from '../assets/image/home.jpg';

let homeMsg = {
	position:"relative",
	zIndex:"10",
	color: '#1890ff',
	textAlign: "center",
	fontSize: "14px",
	fontweight: "bold",
	width: "600px",
	margin: "150px auto",
};
let homeBG = {
	position: "absolute",
	top: "0px",
	bottom: "0px",
	backgroundImage: 'url(' + imgUrl + ')',
	backgroundSize: "100% auto",
	left: "200px",
	right: "0px",
	opacity:"0.4",
}

class Home extends React.Component {
	render() {
		return (
			<div >
				<div style={homeBG}></div>

				<div style={homeMsg}>
					<div style={{fontSize: "22px"}}>
					Welcome to use Frida UI tools :)
					</div>
					<div>
						
					</div>
					
				</div>

			</div>
		)
	}
}

export default Home