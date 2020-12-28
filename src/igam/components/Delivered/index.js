import React from "react";
import "./style.css";
import { SearchIcon, CheckSquareIcon, LocationIcon } from "../../icons";
const Delivered = () => {
  return (
    <div className="delivered container">
      <form>
        <h4 className="center">
          {" "}
          <CheckSquareIcon /> Delivered
        </h4>

        <input type="text" placeholder="search key" className="search" />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>

      <table>
        <tr>
          <th>Date</th>
          <th>Location</th>
          <th>Family</th>
          <th>Package</th>
        </tr>
        <tr>
          <td>dd/mm/yy</td>
          <td>
            {" "}
            <LocationIcon />
          </td>
          <td>fa-1</td>
          <td>pac-1</td>
        </tr>
        <tr>
          <td>dd/mm/yy</td>
          <td>
            {" "}
            <LocationIcon />
          </td>
          <td>fa-2</td>
          <td>pac-2</td>
        </tr>
        <tr>
          <td>dd/mm/yy</td>
          <td>
            {" "}
            <LocationIcon />
          </td>
          <td>fa-3</td>
          <td>pac-3</td>
        </tr>
        <tr>
          <td>dd/mm/yy</td>
          <td>
            {" "}
            <LocationIcon />
          </td>
          <td>fa-4</td>
          <td>pac-4</td>
        </tr>
        <tr>
          <td>dd/mm/yy</td>
          <td>
            {" "}
            <LocationIcon />
          </td>
          <td>fa-5</td>
          <td>pac-5</td>
        </tr>
        <tr>
          <td>dd/mm/yy</td>
          <td>
            {" "}
            <LocationIcon />
          </td>
          <td>fa-6</td>
          <td>pac-6</td>
        </tr>
      </table>
    </div>
  );
};

export default Delivered;
