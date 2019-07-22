import React from 'react';
import axios from 'axios';
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';

const data = [];

class Info extends React.Component {
  state = {
    searchText: '',
    hkinforesp: null
  };

  onGetHookInfo() {
    axios.get(`http://127.0.0.1:8000/hookinfo/`)
        .then(data => this.setState({
            hkinforesp: data.data
        }))
        .catch(console.log("发送请求失败"));

}

formatHookInfo() {
    var pdata = this.state.hkinforesp;
    alert("Please press GetInfo button again")
    for (var i = 0; i < pdata.length; i++) {
        data.push({
          key: i,
          info: pdata[i]
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
        textToHighlight={text}
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
    const columns = [
      {
        title: 'Info',
        dataIndex: 'info',
        key: 'info',
        width: '30%',
        ...this.getColumnSearchProps('info'),
      }
    ];
    return(
        <div > 
        <button onClick={this.onGetHookInfo.bind(this)}>GetInfo</button>
        <button onClick={this.formatHookInfo.bind(this)}>DisplayInfo</button>
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 200 }}/>
        </div>
    );
  }
}
export default Info;