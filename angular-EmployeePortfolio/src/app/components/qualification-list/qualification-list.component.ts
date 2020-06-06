import { Component, OnInit } from '@angular/core';
import { Qualification } from '../../common/qualification';
import { QualificationService } from 'src/app/services/qualification.service';

@Component({
  selector: 'app-qualification-list',
  templateUrl: './qualification-list.component.html',
  styleUrls: ['./qualification-list.component.css']
})
export class QualificationListComponent implements OnInit {
 
  qualifications: Qualification[]=[];

  constructor(private _qualificationService : QualificationService) { }

  ngOnInit() {
    this.listQualifications();
  }

  listQualifications(){
   this._qualificationService.getQualifications().subscribe(
     data => {
       console.log(data);
       this.qualifications = data;
       console.log("Array data is with length "+this.qualifications.length);
       console.log(this.qualifications[0].qid+" "+this.qualifications[0].qname+" "+this.qualifications[0].university+" "+this.qualifications[0].passing_date);
       console.log(this.qualifications[1].qid+" "+this.qualifications[1].qname+this.qualifications[1].university+this.qualifications[0].passing_date);

      }
   )
  }

}
