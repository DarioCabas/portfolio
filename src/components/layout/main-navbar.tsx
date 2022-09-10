import { FC, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { alpha, AppBar, Box, Button, Container, experimentalStyled, Grid, IconButton, Link, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Logo } from 'src/components/logo';
import { makeStyles } from '@mui/styles';

interface MainNavbarProps {
    onOpenSidebar?: () => void;
}

const useStyles = makeStyles((theme) => ({
    switch: {
        verticalAlign: 'middle',
        marginLeft: '4px',
    },
}));

export const MainNavbar: FC<MainNavbarProps> = (props) => {
    const { onOpenSidebar } = props;
    const [modeTheme, setModeTheme] = useState<boolean>(true);
    const classes = useStyles();

    return (

        <Container maxWidth="lg">
            <Toolbar
                disableGutters
                sx={{ minHeight: 64 }}
            >
                <NextLink
                    href="/"
                    passHref
                >
                    <a>
                        <Logo
                            sx={{
                                display: {
                                    md: 'inline',
                                    xs: 'none'
                                },
                                height: 20,
                                width: 20
                            }}
                        />
                    </a>
                </NextLink>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton
                    color="inherit"
                    onClick={onOpenSidebar}
                    sx={{
                        display: {
                            md: 'none'
                        }
                    }}
                >
                    <MenuIcon fontSize="small" />
                </IconButton>
                <Box
                    sx={{
                        alignItems: 'center',
                        display: {
                            md: 'flex',
                            xs: 'none'
                        }
                    }}
                >
                    <NextLink
                        href="#home"
                        passHref
                    >
                        <Link
                            color="textSecondary"
                            underline="none"
                            variant="subtitle2"
                        >
                            Home
                        </Link>
                    </NextLink>
                    <NextLink
                        href="#goal"
                        passHref
                    >
                        <Link
                            color="textSecondary"
                            sx={{ ml: 2 }}
                            underline="none"
                            variant="subtitle2"
                        >
                            Goal
                        </Link>
                    </NextLink>
                    <NextLink
                        href="#benefit"
                        passHref
                    >
                        <Link
                            color="textSecondary"
                            component="a"
                            sx={{ ml: 2 }}
                            underline="none"
                            variant="subtitle2"
                        >
                            Benefits
                        </Link>
                    </NextLink>
                    <NextLink
                        href="#about"
                        passHref
                    >
                        <Link
                            color="textSecondary"
                            component="a"
                            sx={{ ml: 2 }}
                            underline="none"
                            variant="subtitle2"
                        >
                            About
                        </Link>
                    </NextLink>
                    <NextLink
                        href="#contact"
                        passHref
                    >
                        <Link
                            color="textSecondary"
                            component="a"
                            sx={{ ml: 2 }}
                            underline="none"
                            variant="subtitle2"
                        >
                            Contact
                        </Link>
                    </NextLink>
                </Box>
            </Toolbar>
        </Container>
    );
};

MainNavbar.propTypes = {
    onOpenSidebar: PropTypes.func
};
