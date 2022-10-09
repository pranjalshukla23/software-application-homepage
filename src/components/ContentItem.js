import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import {CustomizedTypography} from "../styles/style";


const ContentItem = ({title, description, img, swap}) => {

    const isMatched  = useMediaQuery(useTheme().breakpoints.down("md"))
    console.log(isMatched)

    return (
        <Box display="flex" padding={10} justifyContent="space-between" alignItems="center" bgcolor={!swap && '#fff'} flexDirection={isMatched ? 'column' : 'row'}>
            {swap ?
                <>
                <Box>
                    <CustomizedTypography fontWeight="bold" color="#734950" padding={3} variant="h3" fontSize={{lg: 32, md: 28, sm: 24, xs: 20}}>
                        {title}
                    </CustomizedTypography>
                    <CustomizedTypography padding={3} variant="caption" fontSize={{lg: 24, md: 20, sm: 16, xs: 12}}>
                        {description}
                    </CustomizedTypography>
                </Box>
                <img src={img} alt={title} loading="lazy" width={isMatched ? '100%' : '50%' }
                     style={{boxShadow: "10px 10px 20px #ccc", marginLeft: "10%", borderRadius: 20}} height="300px"/>
                </>
            : <>
                    <img src={img} alt={title} loading="lazy" width={isMatched ? '100%' : '50%' }
                         style={{boxShadow: "10px 10px 20px #ccc", marginRight: "10%", borderRadius: 20}} height="300px"/>
                    <Box>
                        <CustomizedTypography fontWeight="bold" color="#734950" padding={3} variant="h3" fontSize={{lg: 32, md: 28, sm: 24, xs: 20}}>
                            {title}
                        </CustomizedTypography>
                        <CustomizedTypography padding={3} variant="caption" fontSize={{lg: 24, md: 20, sm: 16, xs: 12}}>
                            {description}
                        </CustomizedTypography>
                    </Box>
                </>
            }
        </Box>
    )
}

export default ContentItem