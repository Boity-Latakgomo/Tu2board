export interface PersonDto {
  id?: string;
  userName: string;
  name: string;
  surname: string;
  dateOfBirth: Date | null;
  identificationNumber: string;
  phoneNumber: string;
  emailAddress: string;
  password: string;
  userId: number;
  roleNames: string[];
}

export interface StudentDto extends PersonDto {
  studentNumber: string;
  courseId: string;
  academicYear: number;
}

export interface LecturerDto extends PersonDto {
  lecturerNumber: string;
  qualification: string;
}

export interface STPersonDto {
  id?: string;
  userName: string;
  name: string;
  surname: string;
  identificationNumber: string;
  phoneNumber: string;
  emailAddress: string;
  password: string;
  roleNames: string[];
  courseId?: string;
  academicYear?: number;
}

export interface LoginRequest {
  userNameOrEmailAddress: string;
  password: string;
}

//
export interface CourseDto {
  id?: string;
  name: string;
  DepartmentName: string;
  DepartmentId: string;
}
export interface QuestionDto {
  questionId?: any;
  id?: string;
  text: string;
  title: string;
  personId?: string;
  moduleId: string;
  moduleName?: string;
  personName?: string;
  creationTime?: Date;
}
export interface AnswerDto {
  id?: any;
  questionId: any;
  text: string;
  personId?: string;
  ratingCount?: number;
  creationTime?: Date;
  personName?: string;
}

export interface BookmarkDto {
  id?: string;
  personId: string;
  questionId?: string;
  answerId?: string;
  type: number;
  answerText?: string;
  answerQuestionText?: string;
  questionText?: string;
}

export interface RatingDto {
  id?: string;
  voteType: number;
  questionId?: string;
  personId?: string;
  answerId?: string;
}
export interface ModuleDto {
  id?: string;
  courseId?: string;
  name?: string;
  code?: string;
}

export interface StoredFileDto {
  file: string;
  data: string;
  lecturerId: string;
  name: string;
  lectureName: string;
  isDeleted: boolean;
  deleterUserId: string;
  deletionTime: Date;
  lastModificationTime: Date;
  lastModifierUserId: Date;
  creationTime: Date;
  creatorUserId: number;
  id: string;
}
