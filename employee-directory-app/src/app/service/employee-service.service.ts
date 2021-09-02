import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  selectedEmpId: number = -1;
  selectedTool: string = 'default';
  eventEmitter = new EventEmitter<{toolName: string, id: number}>();

  constructor(private httpClinet: HttpClient) {
    
   }


  public findAll(): Observable<employee[]> {
    return this.httpClinet.get<employee[]>("http://localhost:8080/api/v1/employees");
  }

  public findById(id: number): Observable<employee> {

    return this.httpClinet.get<employee>("http://localhost:8080/api/v1/employees/"+id);
  }

  public deleteById(id: number): Observable<any>  {
    return this.httpClinet.delete<any>("http://localhost:8080/api/v1/employees/"+id);
  }

public serSelectedEmployeeDetailsAndTool(tool: string, id: number) {
    this.selectedTool = tool;
    this.selectedEmpId = id;
}

public getSelectedId() {
  return this.selectedEmpId;
}

public getSelectedTool() {
  return this.selectedTool;
}

}
