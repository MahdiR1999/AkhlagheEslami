import { Divider, Grid } from "@mui/material";
import intro from './intro.png';


export default function Intro(){
    return (
        <Grid container>
            <Grid item xl={12} lg={12} sm={12} md={12} xs={12} sx={{'maxHeight':'100vh','overflowY':'auto'}}>
                <h1><img width={'40vh'} src={intro}></img>&nbsp;مقدمه</h1>
                <Divider variant="inset" sx={{'backgroundColor':'skyblue','mx':'auto'}}/>
            </Grid>
            <Grid item xl={11} lg={11} sm={11} md={11} xs={11} sx={{'maxHeight':'80vh','overflowY':'auto'}}>
            <p style={{'direction':'rtl','textAlign':'right','fontWeight':'bolder'}}>
            اگرچه قمار به یک ماده مربوط نیست ولی ویژگی مشترک زیادی با سایر اختلالات اعتیادی دارد.
            <br/>
قماربازان اغلب با اعتماد بنفس زیاد، گاهی اوقات بی ملاحضه و با انرژی زیاد ظاهر می شوند.
<br/>
آن ها معمولا علائم استرس، اظطراب و افسردگی را نشان می دهند.
<br/>
آن ها اغلب بر این باورند که پول، هم حلال مشکلاتشان است و هم باعث آن ها.
<br/>
تا جایی که قمار آن ها افزایش آن ها افزایش پیدا می کند، دروغ می گویند تا پول بیشتری بدست آورند تا زمانی که وسعت قمار خود را پنهان کنند.
<br/>
آن ها هیچ اقدام جدی ای برای ذخیره پول نمی کنند.
<br/>
زمانی که نتوانند برای قمار خود پول قرض کنند، در رفتارهای ضداجتماعی برای بدست آوردن پول درگیر خواهند شد.


            </p>
            </Grid>
        </Grid>
    )
}