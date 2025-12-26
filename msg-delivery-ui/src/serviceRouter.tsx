import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import {PodStatus} from "./pages/podStatus/PodStatus.tsx";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path={'/'} element={<Home/>}>
        {/*二级路由*/}
        <Route path={'podStatus'} element={<PodStatus/>}/>
    </Route>
));