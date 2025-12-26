import { Outlet } from "react-router-dom";
import { PlatformHeader } from "../components/layout/PlatformHeader.tsx";
import PlatformSideBar from "../components/layout/PlatformSideBar.tsx";
import Box from "@mui/material/Box";

export const Home = () => {
    return (
        <>
            <PlatformHeader />
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                {/* Header - 顶部 */}


                <Box sx={{
                    display: 'flex',
                    flex: 1,
                    overflow: 'hidden',
                }}>
                    {/* 侧边栏区域 - 使用普通的 Box */}
                    <Box sx={{
                        width: 260, // 固定宽度
                        flexShrink: 0, // 防止被压缩
                        borderRight: '1px solid #e0e0e0',
                        backgroundColor: '#fff',
                        overflow: 'auto', // 如果内容过多可以滚动
                    }}>
                        <PlatformSideBar />
                    </Box>

                    {/* 主内容区域 */}
                    <Box
                        component="main"
                        sx={{
                            flex: 1, // 占据剩余所有空间
                            p: 3,
                            backgroundColor: '#f5f5f5',
                            overflow: 'auto',
                        }}
                    >
                        <Outlet/>
                    </Box>
                </Box>
            </Box>
        </>

    );
};