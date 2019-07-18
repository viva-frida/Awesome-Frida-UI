import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
import {Layout } from 'antd';
import MainMenu from './views/mainMenu';
import ContentMain from './Router/router';
import Footer from './data/processData';

const {
	Sider, Content,
} = Layout;
let screenHeight= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

class App extends Component {
	render() {
		return (
			<div className="App" >
				<BrowserRouter>
					<Layout>
						<Sider className="App-customMenu" style={{height:screenHeight}}>
							<MainMenu/>
						</Sider>
						<Layout>
							{/*<Header>Header</Header>*/}
							<Content className="App-contentMain" style={{height:screenHeight}}>
								<ContentMain/>
                <Footer/>
							</Content>
              
							{/*<Footer>Footer</Footer>*/}
						</Layout>
					</Layout>
				</BrowserRouter>
			</div>
		);
	}
}
export default App;
