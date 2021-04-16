import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 18,
        fontFamily: 'inherit',

    },
    body: {
        fontSize: 14,
        fontFamily: 'inherit',
        fontSmooth: 'inherit',
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(Name, Brand, Currency, Amount, Frequency) {
    return { Name, Brand, Currency, Amount, Frequency };
}

const rows = [
    createData('A', 'Nike', 'HKD', 900, 50),
    createData('B', 'Adidas', 'HKD', 180, 30),
    createData('C', 'Jordan', 'HKD', 1200, 20),
    createData('D', 'Reebok', 'HKD', 600, 19),
    createData('E', 'Vans', 'HKD', 500, 19),
    createData('F', 'Converse', 'HKD', 1400, 16),
    createData('G', 'Under Armour', 'HKD', 300, 15),
    createData('H', 'Puma', 'HKD', 1200, 11),
    createData('I', 'New Balance', 'HKD', 780, 10),
    createData('J', 'Fila', 'HKD', 450, 9)
];

const useStyles = makeStyles({
    table: {
        minWidth: 100,
        maxWidth: 200,
    },
});

export default function CustomizedTables() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="right">Brand</StyledTableCell>
                        <StyledTableCell align="right">Currency</StyledTableCell>
                        <StyledTableCell align="right">Amount</StyledTableCell>
                        <StyledTableCell align="right">Frequency</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.Name}>
                            <StyledTableCell component="th" scope="row">
                                {row.Name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.Brand}</StyledTableCell>
                            <StyledTableCell align="right">{row.Currency}</StyledTableCell>
                            <StyledTableCell align="right">{row.Amount}</StyledTableCell>
                            <StyledTableCell align="right">{row.Frequency}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}