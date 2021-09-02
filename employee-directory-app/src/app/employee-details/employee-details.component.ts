import { Component, OnInit } from '@angular/core';
import { employee } from '../model/employee';
import { EmployeeServiceService } from '../service/employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  selectedTool:string = '';
  selectedId:number = -1;
  employeeselected: employee[] = [];
  constructor(private employeeService: EmployeeServiceService) {
    this.employeeService.eventEmitter.subscribe((data:{toolName: string,id: number})=>{
      this.selectedTool = data.toolName;
      this.selectedId = data.id;
      this.employeeService.findById(this.selectedId).subscribe((data: employee)=>{
        this.employeeselected[0] = data;
        console.log( this.employeeselected[0]);
      })
      console.log('event emitter');
    });
   }


  ngOnInit(): void {
  }

}
