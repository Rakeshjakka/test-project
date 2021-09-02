import { Component, OnInit } from '@angular/core';
import { employee } from '../model/employee';
import { EmployeeServiceService } from '../service/employee-service.service';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit {
  selectedTool:string = '';
  selectedId:number = -1;
  constructor(private employeeService: EmployeeServiceService) {
    this.employeeService.eventEmitter.subscribe((data:{toolName: string,id: number})=>{
      this.selectedTool = data.toolName;
      this.selectedId = data.id;
      console.log('event emitter');
    });
   }

  ngOnInit(): void {
   this.selectedTool = this.employeeService.getSelectedTool();
  }


}
