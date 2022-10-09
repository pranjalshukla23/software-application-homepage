import {Drawer, IconButton, List, ListItemButton, ListItemText} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";

const DrawerComponent = ({links}) => {
    const [open,setOpen] = useState(false)
    return (
        <>    <Drawer open={open} onClose={() => setOpen(false)}>
            <List>
                {links.map((item, index)=>(
                    <ListItemButton onClick={() => setOpen(false)} key={index}>
                        <ListItemText>
                            {item}
                        </ListItemText>
                    </ListItemButton>
                ))}
            </List>
        </Drawer>
            <IconButton sx={{ml: 'auto'}} onClick={() =>  setOpen(true)}>
                <MenuIcon color="black" />
            </IconButton>
        </>
    )
}

export default DrawerComponent