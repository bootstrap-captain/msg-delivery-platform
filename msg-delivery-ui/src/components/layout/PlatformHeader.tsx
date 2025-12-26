import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {FormControl, type SelectChangeEvent} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {useState} from 'react';
import ChildCareIcon from '@mui/icons-material/ChildCare';
export const PlatformHeader = () => {
    const [tenantName, setTenantName] = useState<string>('GB_HSBC_hsbcnet-UAT');
    const tenantNameList: string[] = ['GB_HSBC_hsbcnet-UAT', 'GB_HSBC_hsbcnet-PROD', 'GB_HSBC_hsbcnet-UAT', 'GB_HSBC_hsbcnet-PROD', 'GB_HSBC_hsbcnet-UAT', 'GB_HSBC_hsbcnet-PROD'];

    const handleChange = (event: SelectChangeEvent) => {
        setTenantName(event.target.value as string);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                {/* 移除 variant="dense" 或使用 variant="regular" */}
                <Toolbar>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flex: 1,
                        gap: 2
                    }}>
                        <Box
                            component="span"
                            sx={{
                                typography: 'h6',
                                color: 'white',
                                fontWeight: 500,
                                whiteSpace: 'nowrap',
                            }}
                        >
                            Platform
                        </Box>

                        <FormControl sx={{ minWidth: 250 }}>
                            <Select
                                labelId="tenant-select-label"
                                id="tenant-select"
                                value={tenantName}
                                label="Tenant"
                                onChange={handleChange}
                                sx={{
                                    color: 'white',
                                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                    height: 48, // 增加下拉框高度
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(255, 255, 255, 0.3)',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(255, 255, 255, 0.5)',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#90caf9',
                                    },
                                }}
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            backgroundColor: '#424242',
                                            color: 'white',
                                            '& .MuiMenuItem-root': {
                                                '&:hover': {
                                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                },
                                            },
                                        },
                                    },
                                }}
                            >
                                {tenantNameList.map((item, index) => (
                                    <MenuItem
                                        key={`${item}-${index}`}
                                        value={item}
                                        sx={{
                                            '&.Mui-selected': {
                                                backgroundColor: 'rgba(144, 202, 249, 0.16)',
                                            },
                                        }}
                                    >
                                        {item}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }}>
                        <IconButton
                            color="inherit"
                            aria-label="user"
                            size="large"
                        >
                            <ChildCareIcon fontSize="large" />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};