import React from 'react';
import ReactDOM from 'react-dom';
import {Menu, Button, Icon, Input, Table} from 'antd';
import '../index.css';
import 'antd/dist/antd.css'
import axios from 'axios';
import Qs from 'qs';
import Info from '../data/dataList';

class  AndroidTrace  extends React.Component{
    state = {
        current: '1',
        processname: null,
        classfuncname: null,
        modulefuncname: null,
        traceresp: null,

    };
    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    onAndroidTrace(){
        axios({
            url: 'http://127.0.0.1:8000/androidTrace/',
            method: 'post',
            transformRequest: [function (data) {
                // 对 data 进行任意转换处理
                return Qs.stringify(data)
            }],
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: {
                processname: this.state.processname,
                classfuncname: this.state.classfuncname,
                modulefuncname: this.state.modulefuncname,
            }


        })
            .then(data => this.setState({
                traceresp: data.data
            }))
            .catch(console.log("发送请求失败"));
    };


    render(){
        return(
            <div key='/androidTrace' style={{ border: "1px solid black", height: 450, width: 800, }} visiable={this.state.visiable}>
                            <Input addonBefore="ProcessName:" value={this.state.processname} onChange={e => this.setState({
                                processname: e.target.value
                            })} style={{ width: 600 }} size={"large"} />
                            <Input addonBefore="ClassFuncName:" value={this.state.classfuncname} onChange={e => this.setState({
                                classfuncname: e.target.value
                            })} style={{ width: 600 }} size={"large"} />
                            
                            <Input.Search enterButton="Submit" addonBefore="ModuleFuncName:" value={this.state.modulefuncname} onChange={e => this.setState({
                                modulefuncname: e.target.value
                            })} style={{ width: 600 }} size={"large"} onSearch={this.onAndroidTrace.bind(this)} />
                            <div>
                                <div>{this.state.traceresp}</div>
                                <Info/>
                               
                            </div>
                        </div>

        );
    }
}

export default AndroidTrace;