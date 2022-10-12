import {cloneElement} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
export default function ShowDataInList(){

    return(<>
     <List>
                <ListItem>
                  <ListItemText
                    primary="C1"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="C2"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="C3"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="C4"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="C5"
                  />
                </ListItem>
            </List>
    </>);
}