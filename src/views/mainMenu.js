import React from 'react';
import {Menu, Icon} from 'antd';
import '../index.css';
import 'antd/dist/antd.css'
import {Link} from 'react-router-dom';
const { SubMenu } = Menu;
export * from '../Router/config';


class MainMenu extends React.Component{
    state = {
        theme: 'dark',
        current: '1',
        customize: false,
        
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

  
    render(){
        
        return(
           
           

            <div style={{ float: "left" }}>
                
                <Menu
                    theme={this.state.theme}
                    onClick={this.handleClick}
                    style={{ width: 200 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <Menu.Item key='1'>
                        <span>Home</span>
                        <Link to='/'/>
                    </Menu.Item>

                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="android" />
                                <span>Hook</span>
                            </span>
                        }
                        
                    >

                        <Menu.ItemGroup key="g1" title="Ordinary Hook" >
                            <Menu.Item key="2"  >
                                Java Hook
                                <Link to = '/ordinaryJavaHook' />
                            </Menu.Item>
                            <Menu.Item key="3"  >
                                Native Hook
                                <Link to = '/ordinaryNativeHook' />
                                </Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g2" title="Advanced Hook">
                            <Menu.Item key="4" >
                                Java Hook
                                <Link to = '/advancedJavaHook' />
                                </Menu.Item>
                            <Menu.Item key="5" >
                                Native Hook
                                <Link to = '/advancedNativeHook' />
                                </Menu.Item>
                        </Menu.ItemGroup>

                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="android" />
                                <span>Regitser</span>
                            </span>
                        }
                    >
                        <Menu.Item key="6" >
                            Stack Trace
                            </Menu.Item>
                        <Menu.Item key="7" >
                            Android Tracer
                            <Link to = '/androidTracer' />
                            </Menu.Item>

                    </SubMenu>
                    <SubMenu
                        key="sub4"
                        title={
                            <span>
                                <Icon type="android" />
                                <span>Unpack</span>
                            </span>
                        }
                    >
                        <Menu.Item key="8" >
                            Ordinary Unpack
                            <Link to = '/ordinaryUnpack' />
                            </Menu.Item>
                        <Menu.Item key="9" >
                            Advanced Unpack
                            <Link to = '/advancedUnpack' />
                            </Menu.Item>


                    </SubMenu>
                    <SubMenu
                        key="sub5"
                        title={
                            <span>
                                <Icon type="android" />
                                <span>Frida</span>
                            </span>
                        }
                    >
                        <Menu.ItemGroup key="g3" title="Process Func" >
                            <Menu.Item key="10"  >
                                enumerateModules
                                <Link to='/enmuModules'/>
                                </Menu.Item>
                            <Menu.Item key="11"  >
                                findModuleByName
                                <Link to='/findModuleByName'/>
                                </Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g4" title="Module Func" >
                            <Menu.Item key="12"  >
                                enumerateImports
                                <Link to='/enumerateImports'/>
                                </Menu.Item>
                            <Menu.Item key="13"  >
                                enumerateExports
                                <Link to='/enumerateExports'/>
                                </Menu.Item>
                            <Menu.Item key="14"  >
                                findExportByName
                                <Link to='/findExportByName'/>
                                </Menu.Item>
                            <Menu.Item key="15"  >
                                findBaseAddress
                                <Link to='/findBaseAddress'/>
                                </Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g5" title="Memory Func" >
                            <Menu.Item key="16"  >
                                scan
                                </Menu.Item>
                            <Menu.Item key="17"  >
                                alloc
                                </Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g6" title="Java Function" >
                            <Menu.Item key="18"  >
                                enumerateLoadedClasses
                                <Link to='/enumerateLoadedClasses'/>
                                </Menu.Item>
                            <Menu.Item key="19"  >
                                enumerateClassLoaders
                                <Link to='/enumerateClassLoaders'/>
                                </Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g7" title="Interceptor Func" >
                            <Menu.Item key="20"  >
                                attach
                                </Menu.Item>
                            <Menu.Item key="21"  >
                                replace
                                </Menu.Item>
                        </Menu.ItemGroup>

                    </SubMenu>
                    <SubMenu
                        key="sub6"
                        title={
                            <span>
                                <Icon type="android" />
                                <span>IOS</span>
                            </span>
                        }
                    >
                        <Menu.Item key="22" >
                            IOS Func Hook
                            <Link to = '/iosFuncHook' />
                            </Menu.Item>
                        <Menu.Item key="23" >
                            Unknow
                            </Menu.Item>


                    </SubMenu>
                </Menu>
            </div>

                


            

        );
    }
}
export default MainMenu