import React from 'react';
import ReactDOM from 'react-dom';
import {Menu, Button, Icon, Input, Table} from 'antd';
import '../index.css';
import 'antd/dist/antd.css'
import axios from 'axios';
import Qs from 'qs';
import Info from '../data/dataList';

class  AdvancedUnpack  extends React.Component{
    state = {
        current: '1',
        processname: null,
        adresp: null,

    };
    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    onAdvancedUnpack() {

        axios({
            url: 'http://127.0.0.1:8000/adUnpack/',
            method: 'post',
            transformRequest: [function (data) {
                // 对 data 进行任意转换处理
                return Qs.stringify(data)
            }],
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: {
                processname: this.state.processname,

            }


        })

            .then(data => this.setState({
                adresp: data.data
            }))
            .catch(console.log("发送请求失败"));
    };

    render(){
        return(
            <div key='/advancedUnpack' style={{ border: "1px solid black", height: 450, width: 800, }} visiable={this.state.visiable}>
                            
                            <Input.Search enterButton="Submit" addonBefore="ProcessName:" value={this.state.processname} onChange={e => this.setState({
                                processname: e.target.value
                            })} style={{ width: 600 }} size={"large"} onSearch={this.onAdvancedUnpack.bind(this)} />
                            <div>
                                <div>{this.state.adresp}</div>
                                <Info/>
                               
                            </div>
                        </div>

        );
    }
}

export default AdvancedUnpack;