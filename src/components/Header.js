import {AppBar, Box, Button, Tab, useTheme, Tabs, Toolbar, Typography, useMediaQuery} from "@mui/material";
import ApiIcon from '@mui/icons-material/Api';
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';

import DrawerComponent from "./DrawerComponent";
import {CustomizedTypography} from "../styles/style";

const Header = () => {

    const links = ["Products", "Solutions", "Pricing", "Enterprise"]

    const isMatched  = useMediaQuery(useTheme().breakpoints.down("md"))
    console.log(isMatched)

    return (
        <AppBar sx={{bgcolor: 'transparent', boxShadow: "0", position: "sticky"}}>
            {isMatched ?
                <Box display="flex">
                    <ApiIcon sx={{color: "black", padding: 1}}/>
                    <Typography sx={{padding: 0.5, color: "black"}} variant="h6" fontFamily="fantasy">CodeEnv</Typography>
                    <DrawerComponent links={links}/>
                </Box>
                :
                <Toolbar>
                    <Box sx={{display: "flex", width: "100%", alignItems: "center"}}>
                        <ApiIcon sx={{color: "black"}}/>
                        <Box>
                            <Tabs>
                                {links.map((link, index) => (
                                    <Tab key={index} label={link} sx={{
                                        fontWeight: "bold"
                                    }}/>
                                ))}
                            </Tabs>
                        </Box>
                        <Box display="flex" marginLeft="auto">
                            <Button variant="outlined" sx={{marginRight: 2}}>Talk To Us</Button>
                            <Button variant="contained" sx={{marginLeft: 2}}>Try For Free</Button>
                        </Box>
                    </Box>
                </Toolbar>
            }
            <Box width="100%" height="100vh">
                <video src="/video.mp4" width="100%" height="70%" autoPlay loop muted playsInline></video>
                <Box display="flex" width="100%">
                    <CustomizedTypography fontWeight="bold" margin="auto" variant="h4" color="black" textAlign="center" fontSize={{lg: 30, md: 24, sm: 18, xs: 14}}>
                        Build Your Software Hassle Free and Top Notch Quality
                    </CustomizedTypography>
                </Box>
                <Box width="100%" display="flex" justifyContent="center" margin="auto" marginTop={5}>
                    <Button variant="outlined" endIcon={<EmailIcon />} sx={{mr: 3}}>
                        Signup
                    </Button>
                    <Button variant="contained" color="error" endIcon={<GoogleIcon />} sx={{ml: 3}}>
                        Signup
                    </Button>
                </Box>
            </Box>
        </AppBar>
    )
}

export default Header