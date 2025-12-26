import {useState} from 'react';
import {
    Box,
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';
import {
    ExpandLess,
    ExpandMore,
    Folder as FolderIcon,
    Description as DescriptionIcon
} from '@mui/icons-material';
import {menuData, type MenuItem} from "./menu.tsx";



const PlatformSideBar = () => {
    // 使用嵌套状态管理
    const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

    const handleToggle = (itemId: string) => {
        setExpandedItems(prev => ({
            ...prev,
            [itemId]: !prev[itemId]
        }));
    };

    // 递归渲染菜单
    const renderMenuItems = (items: MenuItem[], depth: number = 0) => {
        return items.map((item) => {
            const isExpanded = expandedItems[item.id] || false;
            const paddingLeft = 2 + depth * 2; // 每级增加 2rem 缩进

            if (item.type === 'folder' && item.children) {
                return (
                    <div key={item.id}>
                        <ListItemButton
                            onClick={() => handleToggle(item.id)}
                            sx={{
                                pl: paddingLeft,
                                borderRadius: 1,
                                mb: 0.5,
                                '&:hover': {
                                    backgroundColor: 'action.hover',
                                },
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 36 }}>
                                {item.icon || <FolderIcon />}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.text}
                                primaryTypographyProps={{
                                    fontSize: depth === 0 ? '0.95rem' : '0.875rem'
                                }}
                            />
                            {isExpanded ? <ExpandLess fontSize={depth > 0 ? "small" : "medium"} /> : <ExpandMore fontSize={depth > 0 ? "small" : "medium"} />}
                        </ListItemButton>

                        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {renderMenuItems(item.children, depth + 1)}
                            </List>
                        </Collapse>
                    </div>
                );
            }

            return (
                <ListItemButton
                    key={item.id}
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
                        ...(depth === 2 && { minWidth: 32 })
                    }}>
                        {item.icon || <DescriptionIcon fontSize={depth === 2 ? "small" : "medium"} />}
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
            <Box sx={{flex: 1, overflow: 'auto', p: 2}}>
                <List component="nav" sx={{p: 0}}>
                    {renderMenuItems(menuData)}
                </List>
            </Box>

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