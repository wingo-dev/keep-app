import React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';

function Header() {
    return (
        <div>
            <AppBar position="static">
                <Container style={{ display: 'flex', alignItems: 'center', padding: '20px 0' }}>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Keeper
                </Typography>
                </Container>
            </AppBar>
        </div>
    );
}

export default Header;

