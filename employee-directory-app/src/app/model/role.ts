export class Role {
    public id: number;
	public roleName: string;
    public status: string;

    constructor(   id: number,
        roleName: string,
        status: string,) {
            this.id = id;
           this.roleName = roleName;
           this.status = status;
    }
}