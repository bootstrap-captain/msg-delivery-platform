import {Outlet} from "react-router-dom";

export const PodStatus = () => {
    return (
        <div>
            <h2> 我是pod的标题页面</h2>
            <Outlet/>
        </div>
    );
};

