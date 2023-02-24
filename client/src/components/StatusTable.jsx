import React from "react";
import PlayerRow from "./PlayerRow";

const StatusTable = ({ list, setList }) => {
  return (
    <div>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>Team Name:</th>
            <th>Actions:</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((player, idx) => {
              return (
                <tr key={idx}>
                  <PlayerRow player={player} setList={setList}/>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default StatusTable;
