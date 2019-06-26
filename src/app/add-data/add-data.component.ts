import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  @Output() eventData = new EventEmitter<any>();

  item :any = {
    country : "",
    segment : "",
    product : "",
    unitsSold : null,
    manufacturingPrice : "",
    salePrice : "",
    grossSale : ""
  };
  constructor() { }

  ngOnInit() {
  }

  savetoPrimaryTable(){
    this.eventData.emit(this.item);
    console.log("emitted event",this.item);
  }
}
