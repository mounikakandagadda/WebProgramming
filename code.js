function addTable() {
    var myTableDiv = document.getElementById("myDynamicTable");
  
    var table = document.createElement('TABLE');
    table.border = '3';
  
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
  
    for (var i = 0; i < 55; i++) {
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);
  
      for (var j = 0; j < 70; j++) {
        var td = document.createElement('TD');
        td.width = '10';
        td.height='5';
        td.appendChild(document.createTextNode( " "));
        tr.appendChild(td);
      }
    }
    myTableDiv.appendChild(table);
  }
  addTable();