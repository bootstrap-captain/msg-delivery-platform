import {useState} from 'react';
import {Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography,} from '@mui/material';
import {
    BarChart as BarChartIcon,
    Dashboard as DashboardIcon,
    ExpandLess,
    ExpandMore,
    InsertDriveFile as InsertDriveFileIcon,
    People as PeopleIcon,
    Settings as SettingsIcon,
    ShoppingCart as ShoppingCartIcon,
} from '@mui/icons-material';

const PlatformSideBar = () => {
    const [openMenus, setOpenMenus] = useState({
        dashboard: true,
        management: false,
    });

    const handleMenuToggle = (menu: string) => {
        setOpenMenus(prev => ({
            ...prev,
            [menu]: !prev[menu]
        }));
    };

    return (
        <Box sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            {/* 菜单内容 */}
            <Box sx={{flex: 1, overflow: 'auto', p: 2}}>
                <List component="nav" sx={{p: 0}}>
                    {/* 仪表盘菜单 */}
                    <ListItemButton
                        onClick={() => handleMenuToggle('dashboard')}
                        sx={{
                            borderRadius: 1,
                            mb: 1,
                            '&:hover': {
                                backgroundColor: 'action.hover',
                            },
                        }}
                    >
                        <ListItemIcon>
                            <DashboardIcon/>
                        </ListItemIcon>
                        <ListItemText primary="仪表盘"/>
                        {openMenus.dashboard ? <ExpandLess/> : <ExpandMore/>}
                    </ListItemButton>

                    <Collapse in={openMenus.dashboard} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{pl: 4, borderRadius: 1, mb: 0.5}}>
                                <ListItemIcon sx={{minWidth: 36}}>
                                    <InsertDriveFileIcon/>
                                </ListItemIcon>
                                <ListItemText primary="概览"/>
                            </ListItemButton>
                            <ListItemButton sx={{pl: 4, borderRadius: 1, mb: 0.5}}>
                                <ListItemIcon sx={{minWidth: 36}}>
                                    <InsertDriveFileIcon/>
                                </ListItemIcon>
                                <ListItemText primary="统计"/>
                            </ListItemButton>
                        </List>
                    </Collapse>

                    {/* 用户管理 */}
                    <ListItemButton
                        onClick={() => handleMenuToggle('management')}
                        sx={{
                            borderRadius: 1,
                            my: 1,
                            '&:hover': {
                                backgroundColor: 'action.hover',
                            },
                        }}
                    >
                        <ListItemIcon>
                            <PeopleIcon/>
                        </ListItemIcon>
                        <ListItemText primary="用户管理"/>
                        {openMenus.management ? <ExpandLess/> : <ExpandMore/>}
                    </ListItemButton>

                    <Collapse in={openMenus.management} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{pl: 4, borderRadius: 1, mb: 0.5}}>
                                <ListItemIcon sx={{minWidth: 36}}>
                                    <InsertDriveFileIcon/>
                                </ListItemIcon>
                                <ListItemText primary="用户列表"/>
                            </ListItemButton>
                            <ListItemButton sx={{pl: 4, borderRadius: 1, mb: 0.5}}>
                                <ListItemIcon sx={{minWidth: 36}}>
                                    <InsertDriveFileIcon/>
                                </ListItemIcon>
                                <ListItemText primary="角色管理"/>
                            </ListItemButton>
                        </List>
                    </Collapse>

                    {/* 单一级菜单项 */}
                    <ListItemButton
                        sx={{
                            borderRadius: 1,
                            my: 1,
                            '&:hover': {
                                backgroundColor: 'action.hover',
                            },
                        }}
                    >
                        <ListItemIcon>
                            <ShoppingCartIcon/>
                        </ListItemIcon>
                        <ListItemText primary="订单管理"/>
                    </ListItemButton>

                    <ListItemButton
                        sx={{
                            borderRadius: 1,
                            my: 1,
                            '&:hover': {
                                backgroundColor: 'action.hover',
                            },
                        }}
                    >
                        <ListItemIcon>
                            <BarChartIcon/>
                        </ListItemIcon>
                        <ListItemText primary="数据报表"/>
                    </ListItemButton>

                    <ListItemButton
                        sx={{
                            borderRadius: 1,
                            my: 1,
                            '&:hover': {
                                backgroundColor: 'action.hover',
                            },
                        }}
                    >
                        <ListItemIcon>
                            <SettingsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="系统设置"/>
                    </ListItemButton>
                </List>
            </Box>

            {/* 底部信息 */}
            <Box sx={{
                p: 2,
                borderTop: '1px solid #e0e0e0',
                backgroundColor: 'grey.50',
            }}>
                <Typography variant="caption" color="text.secondary">
                    版本 v1.0.0
                </Typography>
            </Box>
        </Box>
    );
};

export default PlatformSideBar;