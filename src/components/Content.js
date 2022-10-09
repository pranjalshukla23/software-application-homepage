import {Box} from "@mui/material";
import ContentItem from "./ContentItem";


const Content = () => {

    const contentArray = [
        {
        title: 'Get Things Done',
        description: 'lightweight and powerful',
        img: '/1.jpg'
        },
        {
            title: 'Productivity is brilliant',
            description: 'lightweight and powerful',
            img: '/2.jpg'
        },
        {
            title: 'Fast development',
            description: 'lightweight and powerful',
            img: '/3.jpg'
        }
    ]

    return (
        <Box bgcolor="#fbf2f2" display="flex" justifyContent="center" flexDirection="column" width="100%" height="10%">
            {contentArray.map((content, index)=> (
                <ContentItem title={content.title} description={content.description} img={content.img} key={index} swap={index % 2 === 0}/>
            ))}
        </Box>
    )
}

export default Content