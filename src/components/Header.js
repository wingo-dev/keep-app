import React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';

import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
function Header() {
    return (
        <div>
            <AppBar position="static">
                <Container style={{ display: 'flex', alignItems: 'center', padding: '20px 0' }}>
                    <TipsAndUpdatesIcon />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'block', md: 'flex' },
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

