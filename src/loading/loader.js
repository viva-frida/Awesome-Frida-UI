import React from 'react'
import {Spin, Alert} from 'antd';

class Loading extends React.Component {
	render() {
		return (
			<div className="example">
				<Spin tip="Loading..."  size="large" >
				<Alert
				message="Alert message title"
				description="Further details about the context of this alert."
				type="info"
				/>
				</Spin>
			</div>
		)
	}
}

export default Loading