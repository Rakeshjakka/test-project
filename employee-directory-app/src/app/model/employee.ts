import { Role } from "./role";


export class employee {
    public id: number;
	public firstName: string;
    public middleName: string;
    public lastName: string;
    public status: string;
    public dateOfJoining: string;
    public dateOfExit: string;
    public currentRole: Role;
    public roles: Role[];

	
    constructor(id: number, 
                firstName: string,
                middleName: string,
                lastName: string,
                status: string,
                dateOfJoining: string,
                dateOfExit: string,
                currentRole: Role,
                roles: Role[]) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.status = status;
        this.dateOfJoining = dateOfJoining;
        this.dateOfExit = dateOfExit;
        this.currentRole = currentRole;
        this.roles = roles;
    }
}