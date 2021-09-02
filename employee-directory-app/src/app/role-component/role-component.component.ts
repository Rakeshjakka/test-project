import { Component, OnInit } from '@angular/core';
import { Role } from '../model/role';
import { RoleServiceService } from '../service/role-service.service';

@Component({
  selector: 'app-role-component',
  templateUrl: './role-component.component.html',
  styleUrls: ['./role-component.component.css']
})
export class RoleComponentComponent implements OnInit {
  roles: Role[] = [];
  constructor(private roleservice: RoleServiceService) { }

  ngOnInit(): void {
    this.roleservice.findAll().subscribe((data:Role[])=>{
      this.roles = data;
    })
  }

  eventHandler(toolName: string, id: number) {};

}
