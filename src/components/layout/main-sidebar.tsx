import { useEffect, useRef, useState } from 'react';
import type { FC } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Drawer, IconButton, Link, useMediaQuery } from '@mui/material';
import type { Theme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

interface MainSidebarProps {
    onClose?: () => void;
    open?: boolean;
}

const MainSidebarLink = styled(Link)(
    ({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        display: 'block',
        padding: theme.spacing(1.5),
        '&:hover': {
            backgroundColor: theme.palette.action.hover
        }
    })
);

const useStyles = makeStyles((theme) => ({
    switch: {
        verticalAlign: 'middle',
        marginLeft: '4px',
    },
}));

export const MainSidebar: FC<MainSidebarProps> = (props) => {
    const { onClose, open } = props;
    const router = useRouter();
    const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
    const [modeTheme, setModeTheme] = useState<boolean>(true);
    const classes = useStyles();

    const handlePathChange = () => {
        if (open) {
            onClose?.();
        }
    };

    useEffect(
        handlePathChange,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [router.asPath]
    );

    return (
        <Drawer
            anchor="right"
            onClose={onClose}
            open={!lgUp && open}
            PaperProps={{ sx: { width: 256 } }}
            sx={{
                zIndex: (theme) => theme.zIndex.appBar + 100
            }}
            variant="temporary"
        >
            <Box sx={{ p: 2 }}>
                <NextLink
                    href="#home"
                    passHref
                >
                    <MainSidebarLink
                        color="textSecondary"
                        underline="none"
                        variant="subtitle2"
                    >
                        Home
                    </MainSidebarLink>
                </NextLink>
                <NextLink
                    href="#goal"
                    passHref
                >
                    <MainSidebarLink
                        color="textSecondary"
                        underline="none"
                        variant="subtitle2"
                    >
                       Goal
                    </MainSidebarLink>
                </NextLink>
                <NextLink
                    href="#benefits"
                    passHref
                >
                    <MainSidebarLink
                        color="textSecondary"
                        underline="none"
                        variant="subtitle2"
                    >
                        Benefits
                    </MainSidebarLink>
                </NextLink>
                <NextLink
                    href="#about"
                    passHref
                >
                    <MainSidebarLink
                        color="textSecondary"
                        underline="none"
                        variant="subtitle2"
                    >
                        About
                    </MainSidebarLink>
                </NextLink>
                <NextLink
                    href="#contact"
                    passHref
                >
                    <MainSidebarLink
                        color="textSecondary"
                        underline="none"
                        variant="subtitle2"
                    >
                        Contact
                    </MainSidebarLink>
                </NextLink>
            </Box>
        </Drawer>
    );
};

MainSidebar.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool
};
