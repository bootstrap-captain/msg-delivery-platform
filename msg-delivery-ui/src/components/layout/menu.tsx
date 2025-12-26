import {
    BarChart as BarChartIcon,
    Dashboard as DashboardIcon,
    Folder as FolderIcon,
    InsertDriveFile as InsertDriveFileIcon,
    People as PeopleIcon,
    Settings as SettingsIcon,
} from '@mui/icons-material';

import SendIcon from '@mui/icons-material/Send';
import AltRouteIcon from '@mui/icons-material/AltRoute';

// 定义菜单数据类型
export interface MenuItem {
    id: string;
    text: string;
    icon?: React.ReactNode;
    type: 'link' | 'folder';
    children?: MenuItem[];
}

// 菜单数据
export const menuData: MenuItem[] = [
    {
        id: 'pod-status',
        text: 'Pod Status',
        icon: <DashboardIcon/>,
        type: 'folder',
        children: [
            {
                id: 'delivery',
                text: 'Delivery',
                icon: <SendIcon/>,
                type: 'folder',
                children: [
                    {id: 'mPush', text: 'mPush', type: 'link'},
                    {id: 'email', text: 'Email', type: 'link'},
                    {id: 'sms', text: 'SMS', type: 'link'},
                ]
            },
            {
                id: 'routing',
                text: 'Routing',
                icon: <AltRouteIcon/>,
                type: 'folder'
            },
            {id: 'ingress', text: 'Ingress', icon: <InsertDriveFileIcon/>, type: 'link'}
        ]
    },
    {
        id: 'user-management',
        text: '用户管理',
        icon: <PeopleIcon/>,
        type: 'folder',
        children: [
            {
                id: 'user-list',
                text: '用户列表',
                icon: <FolderIcon/>,
                type: 'folder',
                children: [
                    {id: 'all-users', text: '所有用户', type: 'link'},
                    {id: 'active-users', text: '活跃用户', type: 'link'},
                    {id: 'user-permissions', text: '用户权限', type: 'link'},
                ]
            },
            {
                id: 'role-management',
                text: '角色管理',
                icon: <FolderIcon/>,
                type: 'folder',
                children: [
                    {id: 'role-list', text: '角色列表', type: 'link'},
                    {id: 'permission-assign', text: '权限分配', type: 'link'},
                    {id: 'role-audit', text: '角色审计', type: 'link'},
                ]
            }
        ]
    },
    {id: 'reports', text: '数据报表', icon: <BarChartIcon/>, type: 'link'},
    {id: 'settings', text: '系统设置', icon: <SettingsIcon/>, type: 'link'}
];