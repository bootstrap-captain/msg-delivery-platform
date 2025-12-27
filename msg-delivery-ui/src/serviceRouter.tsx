import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import {PodStatus} from "./pages/podStatus/PodStatus.tsx";
import {PodsInfoDisplay} from "./pages/podStatus/PodsInfoDisplay.tsx";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path={'/'} element={<Home/>}>
        <Route path={'pod-status'} element={<PodStatus/>}>
            <Route path={'delivery'} element={<PodsInfoDisplay/>}/>
            <Route path={'routing'} element={<PodsInfoDisplay/>}/>
            <Route path={'ingress'} element={<PodsInfoDisplay/>}/>
        </Route>
    </Route>
));