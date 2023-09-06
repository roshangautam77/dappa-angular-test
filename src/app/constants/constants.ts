/**
 * Api endpoints configuration
 */
export class EndPoints {
    public static baseUrl: string = "http://localhost:5000/api/";
    public static executives: string = "executives";
    public static executiveGroups: string = "executiveGroups";
}

/**
 * App navigation configuration
 */
export class AppNavigation {
    public static allExecutives: string = "executives";
    public static executiveDetails: string = "executive-details";
    public static editExecutive: string = "edit-executive";
    public static addExecutive: string = "add-executive";
    public static executiveGroups: string = "executive-groups";
    public static addGroup: string = "add-group";
    public static editGroup: string = "edit-group";
}

/**
 * Action types to redirect user for edit or view executive
 */
export class ActionType {
    public static view: string = "view";
    public static edit: string = "edit";
}