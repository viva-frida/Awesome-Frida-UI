import React from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';


class ContentMain extends React.Component {
    
    render() {
        return (
            <div >
                
                <Switch>
                    <Route exact path='/' component={global.Main}/>
                    <Route exact path='/ordinaryJavaHook' component={global.OrdinaryJavaHook} />
                    <Route exact path='/ordinaryNativeHook' component={global.OrdinaryNativeHook} />
                    <Route exact path='/advancedJavaHook' component={global.AdvancedJavaHook} />
                    <Route exact path='/advancedNativeHook' component={global.AdvancedNativeHook} />
                    <Route exact path='/androidTracer' component={global.AndroidTracer} />
                    <Route exact path='/ordinaryUnpack' component={global.OrdinaryUnpack} />
                    <Route exact path='/advancedUnpack' component={global.AdvancedUnpack} />
                    <Route exact path='/iosFuncHook' component={global.IosFuncHook}/>
                    <Route exact path='/enmuModules' component={global.EnmuModules}/>
                    <Route exact path='/findModuleByName' component={global.FindModuleByName}/>
                    <Route exact path='/enumerateImports' component={global.EnumerateImports}/>
                    <Route exact path='/enumerateExports' component={global.EnumerateExports}/>
                    <Route exact path='/findExportByName' component={global.FindExportByName}/>
                    <Route exact path='/findBaseAddress' component={global.FindBaseAddress}/>
                    <Route exact path='/enumerateLoadedClasses' component={global.EnumerateLoadedClasses}/>
                    <Route exact path='/enumerateClassLoaders' component={global.EnumerateClassLoaders}/>
                    

                </Switch>
            </div>
        )
    }
}
export default ContentMain

