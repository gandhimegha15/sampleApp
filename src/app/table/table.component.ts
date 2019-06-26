import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() tableData : Array<any>;
  @Input() searchKey?: String;
  @Input() keys:Array<String>;
  //keys : Array<String>;
  dataExists : Boolean = false;
  constructor() { }

  ngOnInit() {
    console.log("data",this.tableData);
    console.log("keys",this.keys);
  }

}
