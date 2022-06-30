import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { fetchGrids } from './gridSlice'

export function Grid() {

    const dispatch = useAppDispatch()
    const data = useAppSelector((state) => state.grid.grids).map(x => ({ ...x }));

    const [columnDefs] = useState([
      { field: "id", sortable: true, filter: true },
      { field: "operation", sortable: true, filter: true },
      { field: "scope", sortable: true, filter: true },
      { field: "timestamp", sortable: true, filter: true },
      { field: "status", sortable: true, filter: true },
    ]);

  useEffect(() => {
    console.log("Dispatching...")
    dispatch(fetchGrids())
  }, [])

    return(
      <div className="ag-theme-alpine" style={{ height: 600, width: 1000 }}>
      <AgGridReact
        rowData={data}
        columnDefs={columnDefs}
        rowSelection='multiple'
        animateRows={true}
        />
      </div>
    )

}