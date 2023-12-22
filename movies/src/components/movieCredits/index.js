import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { getMovieCredits } from "../../api/tmdb-api";
import { excerpt } from "../../util";

export default function MovieCredits({ movie }) {
    const [credits, setCredits] = useState({});

    useEffect(() => {
        getMovieCredits(movie.id).then((apiCredits) => {
            setCredits(apiCredits);
            console.log(apiCredits);
        });
    }, []);

    return (
        <>
            <TableContainer component={Paper} sx={{ marginBottom: '10px', overflowX: 'auto' }}>
                <Table sx={{ minWidth: 550}} aria-label="Cast Table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Character</TableCell>
                            <TableCell align="center">Actor</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {credits?.cast?.map((c) => (
                            <TableRow key={c.id}>
                                <TableCell component="th" scope="row">
                                    {c.character}
                                </TableCell>
                                <TableCell >
                                    {excerpt(c.name)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TableContainer component={Paper} sx={{ marginBottom: '5px', overflowX: 'auto' }}>
                <Table sx={{ minWidth: 550 }} aria-label="Crew Table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Crew Member</TableCell>
                            <TableCell align="center">Department</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {credits?.crew?.map((c) => (
                            <TableRow key={c.id}>
                                <TableCell >{excerpt(c.name)}</TableCell>
                                <TableCell >{excerpt(c.department)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </>


    );
}