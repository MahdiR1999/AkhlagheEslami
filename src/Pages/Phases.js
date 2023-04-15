import { Divider, Grid, Typography } from "@mui/material";
import phases from './Phases.png';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';






export default function Phases(){
    return (
        <Grid container>
            <Grid item xl={12} lg={12} sm={12} md={12} xs={12} sx={{'maxHeight':'100vh','overflowY':'auto'}}>
                <h1><img width={'40vh'} src={phases}></img>&nbsp;4 فاز قمار</h1>
                <Divider variant="inset" sx={{'backgroundColor':'skyblue','mx':'auto'}}/>
            </Grid>
            <Grid item xl={5} lg={5} sm={5} md={5} xs={5} sx={{'mx':'auto','mt':2,'maxHeight':'80vh','overflowY':'auto'}}>
                <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">{
                        (<CardContent>
                            <Typography variant="h5" component="div">
                                فاز 1
                            </Typography>
                            <Typography variant="h6"  color="text.secondary" component="div">
                                فاز برد
                            </Typography>
                            <Typography variant="body1">
                            با یک پیروزی بزرگ پایان می یابد و معادل تقریبا یکسالِ کاری، سهم کسب می کند که خود این، بیمار را شارژ یا تحریک می کند. زنان معمولا پیروزی بزرگی کسب نمی کنند اما قمار یک روش برای گذر از مشکلاتشان است.
                            </Typography>
                        </CardContent>)
                    }
                    </Card>
                </Box>
            </Grid>
            <Grid item xl={5} lg={5} sm={5} md={5} xs={5} sx={{'mx':'auto','mt':2,'maxHeight':'80vh','overflowY':'auto'}}>
                <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">{
                        (<CardContent>
                            <Typography variant="h5" component="div">
                                فاز 2
                            </Typography>
                            <Typography variant="h6"  color="text.secondary" component="div">
                                فاز باخت پیش رونده
                            </Typography>
                            <Typography variant="body1">
                            بیماران ساختار زندگیشان حول قمار تغییر می کند و از قمار بازان حرفه ای به قماربازان احمق تبدیل می شوند که ریسک های قابل توجهی می کنند، پول قرض می گیرند و کارشان را از دست می دهند.
                            </Typography>
                        </CardContent>)
                    }
                    </Card>
                </Box>
            </Grid>
            <Grid item xl={5} lg={5} sm={5} md={5} xs={5} sx={{'mx':'auto','mt':2,'maxHeight':'80vh','overflowY':'auto'}}>
                <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">{
                        (<CardContent>
                            <Typography variant="h5" component="div">
                                فاز 3
                            </Typography>
                            <Typography variant="h6"  color="text.secondary" component="div">
                                فاز درماندگی
                            </Typography>
                            <Typography variant="body1">
                            بیمارانی که پول زیادی را قمار می کنند، بدهی‌شان را پرداخت نمی کنند، چک های بی محل می کشند و احتمالا اختلاس می کنند.
                            </Typography>
                        </CardContent>)
                    }
                    </Card>
                </Box>
            </Grid>
            <Grid item xl={5} lg={5} sm={5} md={5} xs={5} sx={{'mx':'auto','mt':2,'maxHeight':'80vh','overflowY':'auto'}}>
                <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">{
                        (<CardContent>
                            <Typography variant="h5" component="div">
                                فاز 4
                            </Typography>
                            <Typography variant="h6"  color="text.secondary" component="div">
                                فاز نا امیدی
                            </Typography>
                            <Typography variant="body1">
                            بیماران در این مرحله به این فکر می کنند که ضرر و زیان می توانست هیچوقت حاصل نشود ولی حدود 15 سال طول می کشد تا بیماری به این مرحله برسد.
                            </Typography>
                        </CardContent>)
                    }
                    </Card>
                </Box>
            </Grid>
        </Grid>
    )
}