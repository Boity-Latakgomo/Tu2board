import React, { useState, useEffect } from "react";
import styles from "./registerForm.module.css";
import { AuthEntry, AuthEntryPicker, PositiveButton } from "../../components";
import { useUser } from "../../../app/providers/user";
import { STPersonDto } from "../../../app/interfaces";
import { useCourse } from "../../../app/providers/Course";

function RegisterForm() {
  const { createStudent, createLecturer } = useUser();
  const { coursesList } = useCourse();

  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [idNumber, setIdNumber] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [studentNumber, setStudentNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [course, setCourse] = useState<string>("");
  const [academicLevel, setAcademicLevel] = useState<number | undefined>(
    undefined
  );

  const data = ["Student", "Lecture"];
  const courseTestdata = coursesList?.map((courseData) => courseData.name);

  const handleRegistration = () => {
    if (role === "Student") {
      registerStudent();
    } else if (role === "Lecture") {
      registerLecture();
    } else {
      // throw error
    }
  };

  const registerStudent = () => {
    let courseId: string | undefined;

    coursesList?.forEach((courseData) => {
      if (courseData.name === course) courseId = courseData.id;
    });

    console.log("course id: ", courseId);

    if (
      !studentNumber ||
      !name ||
      !surname ||
      !idNumber ||
      !phoneNumber ||
      !emailAddress ||
      !password ||
      !role ||
      !courseId ||
      !(academicLevel ?? -1 >= 0)
    ) {
      console.log("Fill all the fields");
      return;
    }

    const data: STPersonDto = {
      userName: studentNumber,
      name: name,
      surname: surname,
      identificationNumber: idNumber,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress,
      password: password,
      roleNames: [role],
      courseId: courseId,
      academicYear: academicLevel ?? 0,
    };

    console.log("Data: ", data);

    if (createStudent) createStudent(data);
  };

  const registerLecture = () => {};

  return (
    <div className={`${styles.container} bgcolor__light-theme card__shadow`}>
      <p className={styles.title}>Register</p>
      <div className={styles.line} />
      <div className={styles.entryContainer}>
        <AuthEntry placeholder="Name" value={name} onChange={setName} />
        <div className={styles.entrySpace} />
        <AuthEntry
          placeholder="Surname"
          value={surname}
          onChange={setSurname}
        />
        <div className={styles.entrySpace} />
        {/* <AuthEntry placeholder="ID number" value={idNumber} onChange={setIdNumber}/> */}
        <AuthEntryPicker
          placeholderText="Select role"
          selectedText={role}
          onChange={setRole}
          data={data}
        />
        {role === "Student" ? (
          <div>
            <div className={styles.entrySpace} />
            <AuthEntryPicker
              placeholderText="Select course"
              selectedText={course}
              onChange={setCourse}
              data={courseTestdata ?? []}
            />
          </div>
        ) : null}
        <div className={styles.entrySpace} />
        <AuthEntry
          placeholder="Phone number"
          value={phoneNumber}
          onChange={setPhoneNumber}
        />
        <div className={styles.entrySpace} />
        <AuthEntry
          placeholder="Email address"
          value={emailAddress}
          onChange={setEmailAddress}
          type="email"
        />
        <div className={styles.entrySpace} />
        <AuthEntry
          placeholder="Student number"
          value={studentNumber}
          onChange={setStudentNumber}
        />
        <div className={styles.entrySpace} />
        <AuthEntry
          placeholder="Identity number"
          value={idNumber}
          onChange={setIdNumber}
        />
        <div className={styles.entrySpace} />
        <AuthEntry
          placeholder="Academic level"
          value={academicLevel}
          type="number"
          onChange={setAcademicLevel}
        />
        <div className={styles.entrySpace} />
        <AuthEntry
          placeholder="Password"
          value={password}
          onChange={setPassword}
          type="password"
        />
      </div>
      <div className={styles.resetPasswordContainer}>
        <p>
          Forgot password? <span>Reset</span>
        </p>
      </div>
      <div className={styles.entrySpace} />
      <PositiveButton onclick={handleRegistration} text="Register"/>
    </div>
  );
}

export default RegisterForm;
