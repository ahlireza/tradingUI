//------------------------------
//---Base Url API
//------------------------------
export const BaseUrlApi = {
    baseUrl: "http://127.0.0.1:5000/api",
 }

//------------------------------------------------------------Users
//------------------------------
//---User Role
//------------------------------
export const UserRole = {
    CEO: "CEO",
    MANAGER: "Manager",
    COORDINATOR: "Coordinator",
    DRIVER: "Driver",
    OFFSIDER: "Offsider",
    CHECKER: "Checker"
}

//------------------------------
//---Work Place
//------------------------------
export const WorkPlace = {
    DOCK_CONTROLLER: "Dock Controller",
    TRAINER: "Trainer",
    FRIDGE_CHECKER: "Fridge Checker",
    INTERNATIONAL_CHECKER: "International Checker",
    INTERNATIONAL_DRIVER: "International Driver",
    VIRGINE_DRIVER: "Virgine Driver",
    VIRGINE_OFFSIDER: "Virgine Offsider",
    WORK_COVER: "Work Cover"
}

//------------------------------
//---Task Type
//------------------------------
export const TaskType = {
    VIRGINE: "",
    INTERNATIONAL_DRIVER: "International Driver",
    MF804_CHECk: "MF804 Check",
    AI_CHECk: "AI Check",
    UA99_CHECk: "UA99 Check",
    UA61_CHECk: "UA61 Check",
    JD462_CHECk: "JD462 Check",
    HU484_CHECk: "HU484 Check",
    TRAINING: "Training",
    DOCK_FC: "Dock/FC",
    AM_COORDINATOR: "AM Coordinator",
    PM_COORDINATOR: "PM Coordinator",
    NIGHT_COORDINATOR: "Night Coordinator"
}

//------------------------------
//---Operator Type
//------------------------------
export const OperatorType = {
    OT: "Over Time",
    ROSTER: "Roster"
}

//------------------------------------------------------------Flight
//------------------------------
//---Flight Type
//------------------------------
export const FlightType = {
    COLDSTART: "Cold Start",
    FULLTURN: "Full Turn",
    TURNAROUND: "Turnaround",
    TERMINATOR: "Strip"
}

//------------------------------
//---Flight Changes
//------------------------------
export const FlightChanges = {
    ...FlightType,
    REGO: "Rego"
}

//------------------------------
//---Trip Description
//------------------------------
export const TripDescription = {
    LOAD: "Load",
    HELP_TO_LOAD: "Help"
}

//------------------------------------------------------------Truck
//------------------------------
//---Truck Type
//------------------------------
export const TruckType = {
    GATE11: "Gate 11",
    MAX8: "Max 8",
    AUTOMATIC: "Automatic",
    MANUAL: "Manual"
}
