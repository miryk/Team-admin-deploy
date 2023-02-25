import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const PlayerRow = ({ player , setList}) => {
  const updateStatus = async (status) => {
    console.log(player);
    player.status = status;
    console.log(player);
    try {
      const response = await axios.put(`${import.meta.env.VITE_REACT_API_URL}/api/${player._id}`, player);
      if(response.status == 200) {
        toast.success(`${player.name} updated!`)
      }
      const refresh = await axios.get(`${import.meta.env.VITE_REACT_API_URL}/api`);
      setList(refresh.data);
    } catch (err) {
      toast.error(err)
    }
  };

  return (
    <>
      {player && (
        <>
          <td className="w-50">
            <Link>{player.name}</Link>
          </td>
          <td className="w-50">
            <button
              className={
                player.status == "Playing"
                  ? "btn btn-success px-4"
                  : "btn btn-outline-dark hover-success px-4"
              }
              onClick={() => updateStatus("Playing")}
            >
              Playing
            </button>
            <button
              className={
                player.status == "Not Playing"
                  ? "btn btn-danger me-2 ms-2 px-4"
                  : "btn btn-outline-dark hover-danger me-2 ms-2 px-4"
              }
              onClick={() => updateStatus("Not Playing")}
            >
              Not Playing
            </button>
            <button
              className={
                player.status == "Undecided"
                  ? "btn btn-warning px-4"
                  : "btn btn-outline-dark hover-warning px-4"
              }
              onClick={() => updateStatus("Undecided")}
            >
              Undecided
            </button>
          </td>
        </>
      )}
    </>
  );
};

// player.status == "Playing";

export default PlayerRow;
