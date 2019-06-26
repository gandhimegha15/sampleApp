import { Component, OnInit } from '@angular/core';
import { Config } from './config';
import { SearchPipe } from './search.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sampleApp by Megha';
  tableData : Array<any>;
  searchKey : String = "";
  secondaryTableData : Array<any> = [];
  keys : Array<String>;
  constructor(public config:Config, public searchPipe : SearchPipe){

  }
  ngOnInit(): void {

    console.log(this.config.data);
    this.tableData = this.config.data;
    if(this.tableData.length)
      this.keys = Object.keys(this.tableData[0]);
  }

  move(){
    let items = this.searchPipe.transform(this.tableData,this.searchKey);
    console.log("filtered items from tableData",items);

    this.tableData = this.tableData.filter((item)=>{
      return !(item.country.toLowerCase().indexOf(this.searchKey.toLowerCase()) !== -1 || item.segment.toLowerCase().indexOf(this.searchKey.toLowerCase()) !== -1  )
    });
    console.log("tabledata after moving",this.tableData);
    this.secondaryTableData.push.apply(this.secondaryTableData,items);
    
    console.log("secondary table after move",this.secondaryTableData);
    this.searchKey = "";
  }

  // add(){

  // }

  addDataToTable(data){
    console.log("event captured",data);
    this.tableData.push(data);
  }
}
