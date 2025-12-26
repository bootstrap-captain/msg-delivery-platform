import {RouterProvider} from "react-router-dom"
import {router} from "./serviceRouter.tsx";

export function App() {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}
