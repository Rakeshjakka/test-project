import { Component, OnInit } from '@angular/core';
import { employee } from '../model/employee';
import { EmployeeServiceService } from '../service/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: employee[] = [];
  constructor(private employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.employeeService.findAll().subscribe((data: employee[])=>{
      this.employees = data;
    })
  }

  eventHandler(toolName: string, id: number) {
    
    if(toolName == 'delete') {
      this.employeeService.deleteById(id).toPromise();
      this.employeeService.findAll().subscribe((data: employee[])=>{
        this.employees = data;
      })
    } else {
      this.employeeService.serSelectedEmployeeDetailsAndTool(toolName, id);
      this.employeeService.eventEmitter.emit({toolName: toolName,id: id});
    }
    
  }

}
