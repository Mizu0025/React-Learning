export const CREATE_COURSE = "CREATE_COURSE";
export const LOAD_COURSES_SUCCESS = "LOAD_COURSES_SUCCESS";
export const LOAD_AUTHOURS_SUCCESS = "LOAD_AUTHORS_SUCCESS";
export const CREATE_COURSE_SUCCESS = "CREATE_COURSE_SUCCESS";
export const UPDATE_COURSE_SUCCESS = "UPDATE_COURSE_SUCCESS";
export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";

//Below hides the loading state of a delete, making users think it deletes instantly while it's still processing
//also named differently to above standard so apiCallsInProgress doesn't go < 0, due to us not incrementing the # upon calling this
export const DELETE_COURSE_OPTIMISTIC = "DELETE_COURSE_OPTIMISTIC";
