import { createAction } from 'redux-actions';
import { ICourseStateContext } from './context';
import { CourseDto } from '../../interfaces';

export enum CourseActionEnum {
    createCourseRequest = 'CREATE_COURSE_REQUEST',
    listCoursesRequest = 'LIST_COURSES_REQUEST',
    updateCourseRequest = 'UPDATE_COURSE_REQUEST',
    deleteCourseRequest = 'DELETE_COURSE_REQUEST',
    getCourseRequest = 'GET_COURSE_REQUEST',
    searchCourseRequest = 'SEARCH_COURSE_REQUEST',
    selectCourseRequest = 'SELECT_COURSE_REQUEST',
    getCoursesTotalCountRequest = 'GET_COURSES_TOTAL_COUNT_REQUEST',
  }

// Must match the variable in the interface state context (courseCreated)
export const createCourseRequestAction = createAction<ICourseStateContext, CourseDto>(CourseActionEnum.createCourseRequest, (courseCreated) => ({ courseCreated }));
export const listCoursesRequestAction = createAction<ICourseStateContext, Array<CourseDto>>(CourseActionEnum.listCoursesRequest, (coursesList) => ({ coursesList }));
export const getCoursesTotalCountRequestAction = createAction<ICourseStateContext, number>(CourseActionEnum.getCoursesTotalCountRequest, (coursesTotalCount) => ({ coursesTotalCount }));
export const updateCourseRequestAction = createAction<ICourseStateContext, CourseDto>(CourseActionEnum.updateCourseRequest, (courseUpdated) => ({ courseUpdated }));
export const deleteCourseRequestAction = createAction<ICourseStateContext, string>(CourseActionEnum.deleteCourseRequest, (courseDeleted) => ({ courseDeleted }));
export const getCourseRequestAction = createAction<ICourseStateContext, CourseDto[]>(CourseActionEnum.getCourseRequest, (courseSelected) => ({ courseSelected }));
export const selectCourseRequestAction = createAction<ICourseStateContext, CourseDto[]>(CourseActionEnum.selectCourseRequest, (courseSelected) => ({ courseSelected }));