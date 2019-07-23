import Loadable from 'react-loadable';
import Loading from '../loading/loader';

global.Main = Loadable(
    {
        loader: () => import('../views/home'),
        loading: Loading
    }
);

global.OrdinaryJavaHook = Loadable(
    {
        loader: () => import('../views/ordinaryJavaHook'),
        loading: Loading
    }
);

global.OrdinaryNativeHook = Loadable(
    {
        loader: () => import('../views/ordinaryNativeHook'),
        loading: Loading
    }
);

global.AdvancedJavaHook = Loadable(
    {
        loader: () => import('../views/advancedJavaHook'),
        loading: Loading
    }
);

global.AdvancedNativeHook = Loadable(
    {
        loader: () => import('../views/advancedNativeHook'),
        loading: Loading
    }
);

global.AndroidTracer = Loadable(
    {
        loader: () => import('../views/androidTracer'),
        loading: Loading
    }
);

global.OrdinaryUnpack = Loadable(
    {
        loader: () => import('../views/ordinaryUnpack'),
        loading: Loading
    }
);

global.AdvancedUnpack = Loadable(
    {
        loader: () => import('../views/advancedUnpack'),
        loading: Loading
    }
);

global.IosFuncHook = Loadable(
    {
        loader: () => import('../views/iosFuncHook'),
        loading: Loading
    }
);

global.EnmuModules = Loadable(
    {
        loader: () => import('../views/enmuModules'),
        loading: Loading
    }
);

global.FindModuleByName = Loadable(
    {
        loader: () => import('../views/findModuleByName'),
        loading: Loading
    }
);

global.EnumerateImports = Loadable(
    {
        loader: () => import('../views/enumerateImports'),
        loading: Loading
    }
);

global.EnumerateExports = Loadable(
    {
        loader: () => import('../views/enumerateExports'),
        loading: Loading
    }
);

global.FindExportByName = Loadable(
    {
        loader: () => import('../views/findExportByName'),
        loading: Loading
    }
);

global.FindBaseAddress = Loadable(
    {
        loader: () => import('../views/findBaseAddress'),
        loading: Loading
    }
);

global.EnumerateLoadedClasses = Loadable(
    {
        loader: () => import('../views/enumerateLoadedClasses'),
        loading: Loading
    }
);

global.EnumerateClassLoaders = Loadable(
    {
        loader: () => import('../views/enumerateClassLoaders'),
        loading: Loading
    }
);