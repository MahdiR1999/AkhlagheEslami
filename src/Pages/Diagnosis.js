import { Divider, Grid } from "@mui/material";
import diagnosis from './Diagnosis.png';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





const rows = [
    {value1:'علائم طی 12 ماه بروز پیدا می کنند.',value2:'مدت زمان'},
    {value1:`* نیاز به سهم بیشتری دارند برای تجربه همان میزان هیجان
    <br/>* وقتی تلاش به توقف قمار می کنند، تحریک پذیر می شوند
    <br/>* تلاش ناموفق در کاهش قمار
    <br/>* ذهن مشوش با قمار
    <br/>* قمار در پاسخ به پریشانی
    <br/>* قمار به جبران تلفات قبل
    <br/>* دروغ برای پنهان قمار
    <br/>* از دست دادن شغل، روابط و سایر فرصت ها به دلیل قمار
    <br/>* دزدی یا قرض گرفتن پول برای قمار`,value2:'علائم'},
    {value1:'چهار یا بیشتر',value2:'تعداد علائم مورد نیاز برای تشخیص قمار'},
    {value1:'فاز مانیا',value2:'محرومیت ها'},
    {value1:'پریشانی',value2:'عواقب علائم ذکر شده'}
  ]



export default function Diagnosis(){
    return (
        <Grid container>
            <Grid item xl={12} lg={12} sm={12} md={12} xs={12} sx={{'maxHeight':'100vh','overflowY':'auto'}}>
                <h1><img width={'40vh'} src={diagnosis}></img>&nbsp;تشخیص</h1>
                <Divider variant="inset" sx={{'backgroundColor':'skyblue','mx':'auto'}}/>
            </Grid>
            <Grid item xl={11} lg={11} sm={11} md={11} xs={11} sx={{'maxHeight':'80vh','overflowY':'auto'}}>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }}>
                <TableBody>
                    {rows.map((key,index)=>{
                        return <TableRow key={index}>
                            <TableCell dangerouslySetInnerHTML={{__html:`${key.value2} : ${key.value1}`}} style={{ width: 160 ,'fontWeight':'bolder','fontSize':18}} align="center">
                            </TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
            </TableContainer>
            </Grid>
        </Grid>
    )
}