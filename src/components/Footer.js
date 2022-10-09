import {Box, Button, Typography} from "@mui/material";
import {CustomizedTypography} from "../styles/style";


const Footer = () => {

    return (
        <Box display="flex" flexDirection="column">
            <CustomizedTypography variant="h3" fontSize={{lg: 30, md: 24, sm: 18, xs: 14}} fontWeight="bold" paddingTop={10} textAlign="center">
                Ready For Any Team Size
            </CustomizedTypography>
            <CustomizedTypography variant="div" fontSize={{lg: 24, md: 20, sm: 16, xs: 14}} fontWeight="bold" textAlign="center" padding={4}>
                Optimized For Any Team Size
            </CustomizedTypography>
            <Box display="flex" margin="auto" justifyContent="center" padding={5}>
                <Button variant="contained" sx={{mr: 2}} fontSize={{lg: 20, md: 17, sm: 12, xs: 8}}>Try CodeEnv For Free</Button>
                <Button variant="outlined" sx={{ml: 2}} fontSize={{lg: 20, md: 17, sm: 12, xs: 8}}>Talk To Sales</Button>
            </Box>
        </Box>
    )
}

export default Footer