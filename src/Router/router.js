import React from 'react';
import {Route, Switch} from 'react-router-dom';
import OrdinaryJavaHook from '../views/ordinaryJavaHook';
import Home from '../views/home';
import OrdinaryNativeHook from '../views/ordinaryNativeHook';
import AdvancedJavaHook from '../views/advancedJavaHook';
import AdvancedNativeHook from '../views/advancedNativeHook';
import AndroidTrace from '../views/androidTracer';
import OrdinaryUnpack from '../views/ordinaryUnpack';
import AdvancedUnpack from '../views/advancedUnpack';
import IosFuncHook from '../views/iosFuncHook';
import EnmuModules from '../views/enmuModules';
import FindModuleByName from '../views/findModuleByName';
import EnumerateImports from '../views/enumerateImports';
import EnumerateExports from '../views/enumerateExports';
import FindExportByName from '../views/findExportByName';
import FindBaseAddress from '../views/findBaseAddress';
import EnumerateLoadedClasses from '../views/enumerateLoadedClasses';
import EnumerateClassLoaders from '../views/enumerateClassLoaders';

class ContentMain extends React.Component {
    
    render() {
        return (
            <div >
                
                <Switch>
                    <Route exact path='/'  component={Home}/>
                    <Route exact path='/ordinaryJavaHook' component={OrdinaryJavaHook} />
                    <Route exact path='/ordinaryNativeHook' component={OrdinaryNativeHook} />
                    <Route exact path='/advancedJavaHook' component={AdvancedJavaHook} />
                    <Route exact path='/advancedNativeHook' component={AdvancedNativeHook} />
                    <Route exact path='/androidTracer' component={AndroidTrace} />
                    <Route exact path='/ordinaryUnpack' component={OrdinaryUnpack} />
                    <Route exact path='/advancedUnpack' component={AdvancedUnpack} />
                    <Route exact path='/iosFuncHook' component={IosFuncHook}/>
                    <Route exact path='/enmuModules' component={EnmuModules}/>
                    <Route exact path='/findModuleByName' component={FindModuleByName}/>
                    <Route exact path='/enumerateImports' component={EnumerateImports}/>
                    <Route exact path='/enumerateExports' component={EnumerateExports}/>
                    <Route exact path='/findExportByName' component={FindExportByName}/>
                    <Route exact path='/findBaseAddress' component={FindBaseAddress}/>
                    <Route exact path='/enumerateLoadedClasses' component={EnumerateLoadedClasses}/>
                    <Route exact path='/enumerateClassLoaders' component={EnumerateClassLoaders}/>
                    

                </Switch>
            </div>
        )
    }
}
export default ContentMain

