import { Divider, Grid, Typography } from "@mui/material";
import treatment from './Treatment.png';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Treatment(){
    return (
        <Grid container>
            <Grid item xl={12} lg={12} sm={12} md={12} xs={12} sx={{'maxHeight':'100vh','overflowY':'auto'}}>
                <h1><img width={'40vh'} src={treatment}></img>&nbsp;درمان</h1>
                <Divider variant="inset" sx={{'backgroundColor':'skyblue','mx':'auto'}}/>
            </Grid>
            <Grid item xl={11} lg={11} sm={11} md={11} xs={11} sx={{'maxHeight':'80vh','overflowY':'auto'}}>
            <Typography variant="h6">لیست داروهایی که برای درمان قماربازی استفاده می شوند ↓</Typography>
            <List>
                <ListItem>
                    <ListItemText primary="SSRI" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Bupropion" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Lithium" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Lamotrigine" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Atypical Antipsychotics" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Opioids Such As Naltrexone" />
                </ListItem>
            </List>
            </Grid>
        </Grid>
    )
}