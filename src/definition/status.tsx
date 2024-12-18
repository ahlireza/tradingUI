//------------------------------
//---Access Level
//------------------------------
export const AccessLevel = {
    MANAGER: "Manager",
    COORDINATOR: "Coordinator",
    OPERATOR: "Operator"
}

//------------------------------------------------------------Users
//------------------------------
//---User Status
//------------------------------
export const UserStatus = {
    AVAILABLE: "Available",
    ON_LEAVE: "On Leave",
    STOOD_DOWN: "Stood Down"
}

//------------------------------------------------------------Trucks
//------------------------------
//---Truck State
//------------------------------
export const TruckState = {
    ONLINE: "Online",
    OFFLINE: "Offline"
}

//------------------------------
//---Truck Current Status
//------------------------------
export const TruckStatus = {
    BUSY: "Busy",
    IDLE: "Idle",
    COMING: "Coming"
}

//------------------------------
//---Truck Fuel Status
//------------------------------
export const TruckFuelStatus = {
    FULL: "Full",
    HALF: "Half",
    QUARTER: "Quarter",
    EMPTY: "Empty"   
}

//------------------------------------------------------------Catering
//------------------------------
//---Catering Status
//------------------------------
export const CateringStatus = {
    NEW: "New",
    PLANED: "Planed",
    ON_WAY: "On the way",
    GATE27: "Gate 27",
    AIRSIDE: "Airside",
    IN_PROGRESS: "In progress",
    DELIVERED: "Delivered",
    STRIPED: "Striped"
}

//------------------------------------------------------------Trips
//------------------------------
//---Trip Status
//------------------------------
export const TripStatus = {
    PLANED: "Planed",
    IN_PROGRESS: "In progress",
    FINISHED: "Finished"
}

