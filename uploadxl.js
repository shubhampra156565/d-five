
import React, { useState } from "react";


import * as XLSX from "xlsx";


function Uploadxl() {
  const [Sheet1, setItems] = useState([]);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
    });
  };
  return (
    
      
    <div>
      <input
        type="file"
        accept="xlsx,xlm"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />

      <table className="table container">
        <thead>
          <tr>
            <th scope="col">CondidateName</th>
            <th scope="col">Email</th>
            <th scope="col">Email</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {Sheet1.map((d) => (
            <tr key={d.CondidateName}>
              <th>{d.CondidateID}</th>
              <td>{d.Email}</td>
              <td>{d.ProfileShortlisted}</td>
              

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Uploadxl;