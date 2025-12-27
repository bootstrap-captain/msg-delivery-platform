import {useState} from 'react';
import {Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography,} from '@mui/material';
import {Description as DescriptionIcon, ExpandLess, ExpandMore, Folder as FolderIcon} from '@mui/icons-material';
import {menuData, type MenuItem} from "./menu.tsx";
import {type NavigateFunction, useNavigate} from "react-router-dom";

const PlatformSideBar = () => {

    const navigate: NavigateFunction = useNavigate();

    // 使用嵌套状态管理
    const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

    // 处理菜单点击
    const handleMenuItemClick = (item: MenuItem) => {

        // 如果有路由路径，进行导航
        if (item.path) {
            navigate(item.path);
        }

        // 如果是文件夹类型且有子菜单，切换展开状态
        if (item.type === 'folder' && item.children) {
            setExpandedItems(prev => ({
                ...prev,
                [item.id]: !prev[item.id]
            }));
        }
    };

    // 递归渲染菜单
    const renderMenuItems = (items: MenuItem[], depth: number = 0) => {
        return items.map((item) => {
            const isExpanded = expandedItems[item.id] || false;
            const paddingLeft = 2 + depth * 2; // 每级增加 2rem 缩进

            /*如果是目录并且有下一级*/
            if (item.type === 'folder' && item.children) {
                return (
                    <div key={item.id}>
                        <ListItemButton
                            onClick={() => handleMenuItemClick(item)}
                            sx={{
                                pl: paddingLeft,
                                borderRadius: 1,
                                mb: 0.5,
                                '&:hover': {
                                    backgroundColor: 'action.hover',
                                },
                            }}
                        >
                            <ListItemIcon sx={{minWidth: 36}}>
                                {item.icon || <FolderIcon/>}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.text}
                                primaryTypographyProps={{
                                    fontSize: depth === 0 ? '0.95rem' : '0.875rem'
                                }}
                            />
                            {isExpanded ? <ExpandLess fontSize={depth > 0 ? "small" : "medium"}/> :
                                <ExpandMore fontSize={depth > 0 ? "small" : "medium"}/>}
                        </ListItemButton>

                        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {renderMenuItems(item.children, depth + 1)}
                            </List>
                        </Collapse>
                    </div>
                );
            }

            /*如果是叶子目录*/
            return (
                <ListItemButton
                    key={item.id}
                    onClick={() => handleMenuItemClick(item)}
                    sx={{
                        pl: paddingLeft,
                        borderRadius: 1,
                        mb: 0.5,
                        '&:hover': {
                            backgroundColor: 'action.hover',
                        },
                    }}
                >
                    <ListItemIcon sx={{
                        minWidth: 36,
                        ...(depth === 2 && {minWidth: 32})
                    }}>
                        {item.icon || <DescriptionIcon fontSize={depth === 2 ? "small" : "medium"}/>}
                    </ListItemIcon>
                    <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{
                            fontSize: depth === 2 ? '0.875rem' : '0.9rem',
                            fontWeight: depth === 0 ? 500 : 400
                        }}
                    />
                </ListItemButton>
            );
        });
    };


    return (
        <Box sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            {/*渲染对应的侧边栏*/}
            <Box sx={{flex: 1, overflow: 'auto', p: 2}}>
                <List component="nav" sx={{p: 0}}>
                    {renderMenuItems(menuData)}
                </List>
            </Box>

            {/*底部信息*/}
            <Box sx={{
                p: 2,
                borderTop: '1px solid #e0e0e0',
                backgroundColor: 'grey.50',
            }}>
                <Typography variant="caption" color="text.secondary">
                    version v1.0.0
                </Typography>
            </Box>
        </Box>
    );
};

export default PlatformSideBar;