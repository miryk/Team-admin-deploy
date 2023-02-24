import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ListAll = () => {
  const [list, setList] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${import.meta.env.VITE_REACT_API_URL}`);
      setList(response.data);
    };
    getData();
  }, []);

  const handleDelete = async (id, name) => {
    try {
      console.log(id);
      const response = await axios.delete(
        `${import.meta.env.VITE_REACT_API_URL}/${id}`
      );
      if (response.status == 200) {
        toast.success(`${name} deleted from team`);
      }
      const refresh = await axios.get(`${import.meta.env.VITE_REACT_API_URL}`);
      setList(refresh.data);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div>
      <table className="table table-stripped overflow-y-auto">
        <thead>
          <tr className="bg-secondary bg-opacity-50">
            <th>Player Name</th>
            <th>Preferred Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((player, idx) => {
              return (
                <tr key={idx}>
                  <td>
                    <Link>{player.name}</Link>
                  </td>
                  <td>{player.preferredPosition}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(player._id, player.name)}
                      className="btn btn-danger border-dark border-2"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ListAll;
