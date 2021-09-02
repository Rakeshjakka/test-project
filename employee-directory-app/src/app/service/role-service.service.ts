import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../model/role';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  constructor(private httpClinet: HttpClient) {
    
  }


 public findAll(): Observable<Role[]> {
   return this.httpClinet.get<Role[]>("http://localhost:8080/api/v1/roles");
 }
}
