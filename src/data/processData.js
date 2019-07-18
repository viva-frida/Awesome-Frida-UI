import React from 'react';
import {Button, Icon, Input, Table, } from 'antd';
import Highlighter from 'react-highlight-words';
import axios from 'axios';
const data = [];

/**
 *Through filterDropdown custom column filtering function, and implement a search column way
 *
 */
class Footer extends React.Component {
    state = {
        searchText: '',
        presp: null

    };

    /**
     * get server respones and data
     */
    onGetProcess() {
        axios.get(`http://127.0.0.1:8000/process/`)
            .then(data => this.setState({
                presp: data.data
            }))
            .catch(console.log("发送请求失败"));



    }

     /**
     * handle the Json data,get pid and process name
     */
    getData() {
        var pdata = this.state.presp;
        //alert(pdata)
        alert("Please press GetProcess button again")
        for (var i = 0; i < pdata.length; i++) {
            data.push({
                key: i,
                pid: pdata[i][0],
                name: pdata[i][1]
            });


        }


    }

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (

            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
            </Button>
                <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    Reset
            </Button>
            </div>
        ),
        filterIcon: filtered => (
            <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ),
    });
    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };
    render() {
        const columns = [{
            title: 'PID',
            dataIndex: 'pid',
            key: 'pid',
            width: 300,
            ...this.getColumnSearchProps('pid'),

        }, {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 300,
            ...this.getColumnSearchProps('name'),

        }];

        return (
            <div style={{ float: "left" }}>
            <button onClick={this.onGetProcess.bind(this)} >GetProcess</button>
            <button onClick={this.getData.bind(this)} >DisplayData</button>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
            </div>
        );
    }
}

export default Footer;