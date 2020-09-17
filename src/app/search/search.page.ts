import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  segment1:boolean=true;
  segment2:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  segmentChange(event){
    var segment = event.target.value;
    if(segment == "segment1"){
      this.segment1 = true;
      this.segment2 = false;
    }
    else if(segment == "segment2"){
      this.segment1 = false;
      this.segment2 = true;
    }
  }

}
