import React from "react";
import './StandingsTable.css'

function StandingsTable(){
    return (
        <>
            <table className="standings-table">
                <tr>
                    <th>Team</th>
                    <th>Wins</th>
                </tr>
                <tr>
                    <td>Dodgers</td>
                    <td>162</td>
                </tr>
                <tr>
                    <td>Giants</td>
                    <td>0</td>
                </tr>
            </table>
        </>
    )
}

export default StandingsTable;