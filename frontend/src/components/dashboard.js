// import React, { useState } from "react";
// import '../../src/styles.css';

// const Dashboard = () => {
//   const [columns, setColumns] = useState([
//     { id: 1, heading: "Month & Year"},
//   ]);
//   const [rows, setRows] = useState([
//     {
//       id: 1,
//       cells: [
//         { id: 1, value: getCurrentMonthYear() },
//       ],
//     },
//   ]);

//   // Get the current month and year in the format of "Month Year"
//   function getCurrentMonthYear() {
//     const currentDate = new Date();
//     const options = { month: "long", year: "numeric" };
//     return currentDate.toLocaleDateString(undefined, options);
//   }

//   // Add a new column
//   const handleAddColumn = () => {
//     const newColumnId = columns.length + 1;
//     const newColumn = { id: newColumnId, heading: `Column ${newColumnId}` };

//     setColumns([...columns, newColumn]);

//     const newRows = rows.map((row) => {
//       return {
//         ...row,
//         cells: [...row.cells, { id: newColumnId, value: "" }],
//       };
//     });

//     setRows(newRows);
//   };

//   const handleEditColumnHeading = (columnId, value) => {
//     const updatedColumns = columns.map((column) => {
//       if (column.id === columnId) {
//         return { ...column, heading: value };
//       }
//       return column;
//     });
//     setColumns(updatedColumns);
//   };

//   // Add a new row
//   const handleAddRow = () => {
//     const newRowId = rows.length + 1;
//     const newRowCells = columns.map((column, index) => ({
//       id: column.id,
//       value: index===0 ? getNextMonthYear(): "",
//     }));
//     const newRow = { id: newRowId, cells: newRowCells };

//     setRows([newRow, ...rows]);
//   };

//   // Delete a column
//   const handleDeleteColumn = (columnId) => {
//     const updatedColumns = columns.filter((column) => column.id !== columnId);
//     const updatedRows = rows.map((row) => {
//       const updatedCells = row.cells.filter((cell) => cell.id !== columnId);
//       return { ...row, cells: updatedCells };
//     });

//     setColumns(updatedColumns);
//     setRows(updatedRows);
//   };

//   // Clear a cell value
//   const handleClearCell = (rowId, columnId) => {
//     const updatedRows = rows.map((row) => {
//       if (row.id === rowId) {
//         const updatedCells = row.cells.map((cell) => {
//           if (cell.id === columnId) {
//             return { ...cell, value: "" };
//           }
//           return cell;
//         });
//         return { ...row, cells: updatedCells };
//       }
//       return row;
//     });

//     setRows(updatedRows);
//   };

//   // Handle cell value change
//   const handleCellValueChange = (e, rowId, columnId) => {
//     const updatedRows = rows.map((row) => {
//       if (row.id === rowId) {
//         const updatedCells = row.cells.map((cell) => {
//           if (cell.id === columnId) {
//             return { ...cell, value: e.target.value };
//           }
//           return cell;
//         });
//         return { ...row, cells: updatedCells };
//       }
//       return row;
//     });

//     setRows(updatedRows);
//   };

//   // Calculate the total for each row
//   const calculateRowTotal = (row) => {
//     let total = 0;
//     row.cells.forEach((cell) => {
//       if (!isNaN(Number(cell.value))) {
//         total += Number(cell.value);
//       }
//     });
//     return total;
//   };

//   // Calculate the total for each column
//   const calculateColumnTotal = (columnId) => {
//     let total = 0;
//     rows.forEach((row) => {
//       const cell = row.cells.find((cell) => cell.id === columnId);
//       if (cell && !isNaN(Number(cell.value))) {
//         total += Number(cell.value);
//       }
//     });
//     return total;
//   };

//   // Get the next month and year
//   const getNextMonthYear = () => {
//     const currentDate = new Date();
//     currentDate.setMonth(currentDate.getMonth() + rows.length);
//     const options = { month: "long", year: "numeric" };
//     return currentDate.toLocaleDateString(undefined, options);
//   };

//   return (
//     <div className="table-container">
//       <table className="table">
//         <thead>
//           <tr>
//             {columns.map((column) => (
//               <th key={column.id}>
//                 {column.id === 1 ? (
//                   column.heading
//                 ) : (
//                   <input
//                     type="text"
//                     value={column.heading}
//                     onChange={(e) =>
//                       handleEditColumnHeading(column.id,e.target.value)
//                     }
//                   />
//                 )}
//                 {column.id !== 1 && (
//                   <button
//                     className="delete-column"
//                     onClick={() => handleDeleteColumn(column.id)}
//                   >
//                     Delete Column
//                   </button>
//                 )}
//               </th>
//             ))}
//             <th>Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map((row) => (
//             <tr key={row.id}>
//               {row.cells.map((cell) => (
//                 <td key={cell.id}>
//                   {cell.id === 1 ? (
//                     cell.value
//                   ) : (
//                     <>
//                       <input
//                         type="text"
//                         value={cell.value}
//                         onChange={(e) =>
//                           handleCellValueChange(e, row.id, cell.id)
//                         }
//                       />
//                       <button
//                         className="clear-cell"
//                         onClick={() => handleClearCell(row.id, cell.id)}
//                       >
//                         Clear
//                       </button>
//                     </>
//                   )}
//                 </td>
//               ))}
//               <td>{calculateRowTotal(row)}</td>
//             </tr>
//           ))}
//         </tbody>
//         <tfoot>
//           <tr>
//             <td>Total</td>
//             {columns.map((column) => (
//               <td key={column.id}>{calculateColumnTotal(column.id+1)}</td>
//             ))}
//             <td></td>
//           </tr>
//         </tfoot>
//       </table>
//       {rows.length > 12 && (
//         <button className="load-more" onClick={handleAddRow}>
//           Load More
//         </button>
//       )}
//       <div className="table-actions">
//         <button onClick={handleAddColumn}>Add Column</button>
//         <button onClick={handleAddRow}>Add Row</button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState,useEffect } from "react";
import '../../src/styles.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
// import Parse from 'parse/dist/parse.min.js';


const Dashboard = () => {
  const [columns, setColumns] = useState([{ id: 1, heading: "Month & Year" }, { id: 2, heading: "Monthly Income" }]);
  const [rows, setRows] = useState([{ id: 1, cells: [{ id: 1, value: getCurrentMonthYear() }, { id: 2, value: "" }] }]);
  // const currentUser = Parse.User.current();
  const user_data=JSON.parse(localStorage.getItem('user'));
  const navigate=useNavigate();
  const [currpage,setcurrpage] = useState(1);
  const [totalpages, settotalpages]=useState(0);
  const [totvals,settotalvals] = useState(1);
  const [allrows,setallrows] = useState("");
  const [allcols,setallcols] = useState("");
  // console.log(user_data);
  if(user_data){
    const loggedinusername=user_data.split('@')[0];
  }
  else{
    navigate('/login');
  }
  

  
  const months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const [load,setload]=useState(false);
  const [visibleRows, setVisibleRows] = useState(12);

  useEffect(() =>{
    axios.get(`http://127.0.0.1:4000/api/data1/dashboard/${user_data}/${currpage}`)
    .then((res)=>{
      console.log("res.data",res.data);
        if(res.data.vals[0]?.email===user_data){
          console.log(res.data.paginatedexpenses);
          setRows(res.data.paginatedexpenses);
          settotalpages(res.data.totalpages);
          settotalvals(res.data.vals[0].rowS[0].id+1);
          setColumns(res.data.vals[0].columnS);
          setallrows(res.data.vals[0].rowS);
          setallcols(res.data.vals[0].columnS);
        }
        else if(res.data.vals.length===0){
          setRows([{ id: 1, cells: [{ id: 1, value: getCurrentMonthYear() }, { id: 2, value: "" }] }]);
          setColumns([{ id: 1, heading: "Month & Year" }, { id: 2, heading: "Monthly Income" }]);

        }
        else{
          alert('You are logged out, please login again.');
          navigate('/login');
        }
    })
    .catch((error) =>{
      alert('You are logged out, please login again.');
      navigate('/login');
      console.log(error);
    });

  },[currpage]);

  useEffect(() =>{
    console.log('rows,columns',rows,columns);
  },[rows,columns]);

  const onSave = async(e) => {
    e.preventDefault();
    console.log('rows,columns2',rows,columns);
    try {
      // console.log(formData);
      await axios.post(
        'http://127.0.0.1:4000/api/data1/dashboard',
        {
          email: user_data,
          row: rows,
          column: columns
        }
      )
      .then(res => {
        // console.log(res)
          if(res.data==="Failed"){
              alert("Failed");
          }
          else{
              console.log('resdata',res.data);
              alert("Saved successfully");
              // setRows(res.data.rowS);
              // setColumns(res.data.columnS);
              // localStorage.setItem(`rowss${res.data.email}`,JSON.stringify(res.data.rowS));
              // localStorage.setItem(`columnss${res.data.email}`,JSON.stringify(res.data.columnS));

          }
        })
      
    } catch (error) {
      console.log(error);
    }
  };

  function normalizeDate() {
    const date=rows[0].cells[0].value.split(' ')[0];
    const year=rows[0].cells[0].value.split(' ')[1];
    console.log('date',date,'year',year);
    const ind= (months.indexOf(date)+1)%12;
    console.log('ind',ind);
    const nextmonth=months[ind];
    const nextyear= ind===0?parseInt(year)+1:parseInt(year);
    return nextmonth+" "+nextyear;
    
    
  // const options = { year: "numeric", month: "2-digit" };
  // const date = new Date(dateString);
  // return new Intl.DateTimeFormat("en-US", options).format(date);

}
  
  function getCurrentMonthYear() {
    const currentDate = new Date();
    const options = { month: "long", year: "numeric" };
    return currentDate.toLocaleDateString(undefined, options);
  }

  // const handleLoadMore = () => {
  //   setVisibleRows(visibleRows + 12);
  //   if (visibleRows + 12 >= rows?.length) {
  //     setload(false);
  //   }
  // };


  const handleAddColumn = () => {
    const newColumnId = columns?.length + 1;
    console.log("newcolumnid",newColumnId);
    const newColumn = { id: newColumnId, heading: `Category ${newColumnId-2}` };
    setColumns([...columns, newColumn]);
    
    const newRows = rows?.map((row) => {
      return {
        ...row,
        cells: [...row?.cells, { id: newColumnId, value: "" }],
      };
    });

    setRows(newRows);
    // console.log('rows,columns',rows,columns);
  };

  const handleEditColumnHeading = (columnId, value) => {
    const updatedColumns = columns?.map((column) => {
      if (column.id === columnId) {
        return { ...column, heading: value };
      }
      return column;
    });
    setColumns(updatedColumns);
  };

  const handleAddRow = () => {
    const newRowId = totvals + 1;
    settotalvals(newRowId);
    console.log('totvals',totvals);
    const newRowCells = columns?.map((column, index) => ({ id: column.id, value: index===0 ? getNextMonthYear(): "", }));
    // console.log(newRowCells);
    const newRow = { id: newRowId, cells: newRowCells };
    console.log("newRow",newRow);
    setRows([newRow, ...allrows]); 
    console.log("rows",rows);
  };

  const handleDeleteColumn = (columnId) => {
    const updatedColumns = columns?.filter((column) => column.id !== columnId);
    const updatedRows = rows?.map((row) => {
      const updatedCells = row?.cells.filter((cell) => cell.id !== columnId);
      return { ...row, cells: updatedCells };
    });
    setColumns(updatedColumns);
    setRows(updatedRows);
  };

  const handleClearCell = (rowId, columnId) => {
    const updatedRows = rows?.map((row) => {
      if (row?.id === rowId) {
        const updatedCells = row?.cells.map((cell) => {
          if (cell.id === columnId) {
            return { ...cell, value: "" };
          }
          return cell;
        });
        return { ...row, cells: updatedCells };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const handleCellValueChange = (e, rowId, columnId) => {
    const updatedRows = rows?.map((row) => {
      if (row?.id === rowId) {
        const updatedCells = row?.cells.map((cell) => {
          if (cell.id === columnId) {
            return { ...cell, value: e.target.value };
          }
          return cell;
        });
        return { ...row, cells: updatedCells };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const calculateRowTotal = (row) => {
    let total = 0;
    row?.cells?.forEach((cell,index) => {
      if (!isNaN(Number(cell.value)) && index>1) {
        total += Number(cell.value);
      }
    });
    return total;
  };

  const calculateColumnTotal = (columnId) => {
    let total = 0;
    rows?.forEach((row) => {
      const cell = row?.cells?.find((cell) => cell.id === columnId);
      if (cell && !isNaN(Number(cell.value))) {
        total += Number(cell.value);
      }
    });
    return total;
  };

  const calculateSavings = (row) => {
    const monthlyIncome = row?.cells?.find((cell) => cell.id === 2)?.value || 0;
    const total = calculateRowTotal(row);
    console.log(monthlyIncome, total);
    return  monthlyIncome-total;
  };

  const getNextMonthYear = () => {
    // const currentDate = new Date(getCurrentMonthYear());
    // currentDate.setMonth(currentDate.getMonth() + rows?.length);
    // const options = { month: "long", year: "numeric" };
    console.log("newmonth", normalizeDate());
    return normalizeDate();
  };

  const handleprev=()=>{
    if(currpage>1){
      setcurrpage(currpage-1);
    }
    
  }

  const handlenext=()=>{
    if(currpage<totalpages){
      setcurrpage(currpage+1);
      console.log("currpage",currpage);
    }
    
  }

  

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            {columns?.map((column) => (
              <th key={column.id}>
                <div className="sidebyside">
                {column?.id === 1 ? (
                  column?.heading
                ) : (
                  <input
                    type="text"
                    value={column?.heading}
                    onChange={(e) => handleEditColumnHeading(column?.id, e.target.value)}
                  />
                )}
                {column?.id > 2 && (
                  <button className="delete-column" onClick={() => handleDeleteColumn(column?.id)}>
                    Delete
                  </button>
                )}
                </div>
              </th>
            ))}
            <th>Total Expenses</th>
            <th>Savings</th>
          </tr>
        </thead>
        <tbody>
          {rows?.map((row) => (
            <tr key={row?.id}>
              {row?.cells.map((cell) => (
                <td key={cell.id}>
                  <div className="sidebyside">
                  {cell.id === 1 ? (
                    cell.value
                  ) : (
                    <>
                      <input
                        type="text"
                        value={cell.value}
                        onChange={(e) => handleCellValueChange(e, row.id, cell.id)}
                      />
                      <button className="clear-cell" onClick={() => handleClearCell(row.id, cell.id)}>
                        Clear
                      </button>
                    </>
                  )}
                  </div>
                </td>
              ))}
              <td>{calculateRowTotal(row)}</td>
              <td>{calculateSavings(row)}</td>
            </tr>
          ))}
          <tr>
            <td>
              <button className="add-row" onClick={handleAddRow}>
                Add Next Month
              </button>
            </td>
            {columns?.slice(1).map((column) => (
              <td key={column?.id}></td>
            ))}
            <td></td>
            <td></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            {columns?.slice(1).map((column) => (
              <th key={column?.id}>{calculateColumnTotal(column?.id)}</th>
            ))}
          </tr>
        </tfoot>
      </table>
      {/* {rows?.length > 12 && (
        <button className="load-more" onClick={handleLoadMore}>
          Load More
        </button>
      )} */}
      <button className="add-column" onClick={handleAddColumn}>
        Add your Expense Category
      </button>
      <button className="save-button"onClick={onSave}>
        Save Data
      </button>
      <div className="page-buttons">
        <button className="previous" onClick={handleprev}>
          Previous
        </button>
        <button className="next" onClick={handlenext}>
          Next
        </button>
      </div>
      {/* </form> */}
    </div>
  );
};

export default Dashboard;

