import {useState} from 'react';
import { AgGridReact } from 'ag-grid-react';
import DataWithElipsis from './DataWithElipsis';
import EditAndDeleteRender from './EditAndDeleteRender';
import ShowDataInList from './ShowDataInList';

export default function GroupGrid(){
    const [rowData] = useState([
        { Price_Threshold: 'Toyota',
         Product_Group: 'Celica',
          Country_Include:'test' ,
          Product_Exclude: 'test' },
        { Price_Threshold: 'Toyota',
         Product_Group: 'Celica',
          Country_Include:'test' ,
          Product_Exclude: 'test' },
        { Price_Threshold: 'Toyota',
         Product_Group: 'Celica',
          Country_Include:'test' ,
          Product_Exclude: 'test' },
        { Price_Threshold: 'Toyota',
         Product_Group: 'Celica',
          Country_Include:'test' ,
          Product_Exclude: 'test' },
        
      ]);
    
      const [columnDefs] = useState([
          // { field: 'Product_Group',
          // headerName:'Product Group' },
          { field: 'Country_Include' ,cellRenderer: DataWithElipsis,
          cellEditor: ShowDataInList,
          cellEditorPopup: true,
          cellEditorPopupPosition: 'under',
          editable: true,
params: { values: ['Male', 'Female'] },          
          headerName: 'Country to Include'},
        { field: 'Price_Threshold',
    headerName:'Price Threshold' },
        { field: 'Product_Exclude',
    headerName:'Product to Exclude' },
    {field:'Actions',
     cellRenderer: EditAndDeleteRender}
      ]);

      return (
        <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
          <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
        </div>
      );
}