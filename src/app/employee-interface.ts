import { RoleType } from "./role-type.enum";

export interface EmployeeInterface {
    firstName: string,
    lastName: string,
    contactNo: number,
    roleType: RoleType,
}
