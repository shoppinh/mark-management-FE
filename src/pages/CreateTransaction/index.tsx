import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { RootState } from "../../app/store";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createTransaction } from "../../app/blockchainSlice";
export interface InputFormState {
  toAddress: string;
  studentID: number;
  studentName: string;
  DOB: string;
  studentPhone: string;
  teacherID: number;
  teacherName: string;
  teacherPhone: string;
  level: string;
  department: string;
  courseName: string;
  semester: string;
  numberOfTC: number;
  mark1: number;
  mark2: number;
  mark3: number;
}

const CreateTransaction = () => {
  const navigate = useNavigate();
  const { address } = useSelector((state: RootState) => state.blockchain);
  const dispatch = useDispatch();
  const fetchSubmit = (value: InputFormState) => {
    dispatch(createTransaction(value));
    navigate("/", { replace: true });
  };
  return (
    <div className="container">
      <h1>Create transaction</h1>
      <p>Transfer some money to someone!</p>

      <br />

      <Formik
        initialValues={{
          toAddress: "",
          studentID: 0,
          studentName: "",
          DOB: "",
          studentPhone: "",
          teacherID: 0,
          teacherName: "",
          teacherPhone: "",
          level: "",
          department: "",
          courseName: "",
          semester: "",
          numberOfTC: 0,
          mark1: 0,
          mark2: 0,
          mark3: 0,
        }}
        validationSchema={Yup.object().shape({
          toAddress: Yup.string().max(255).required("this field is required"),
          studentName: Yup.string().max(255).required("this field is required"),
          DOB: Yup.string().max(255).required("this field is required"),
          studentPhone: Yup.string()
            .max(255)
            .required("this field is required"),
          teacherName: Yup.string().max(255).required("this field is required"),
          teacherPhone: Yup.string()
            .max(255)
            .required("this field is required"),
          level: Yup.string().max(255).required("this field is required"),
          department: Yup.string().max(255).required("this field is required"),
          courseName: Yup.string().max(255).required("this field is required"),
          semester: Yup.string().max(255).required("this field is required"),
          studentID: Yup.number().required("this field is required"),
          teacherID: Yup.number().required("this field is required"),
          numberOfTC: Yup.number().max(10).required("this field is required"),
          mark1: Yup.number().max(10).required("this field is required"),
          mark2: Yup.number().max(10).required("this field is required"),
          mark3: Yup.number().max(10).required("this field is required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          fetchSubmit(values);

          setSubmitting(false);
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group py-2">
              <label htmlFor="fromAddress">From address</label>
              <input
                type="text"
                className="form-control"
                id="fromAddress"
                aria-describedby="fromAddressHelp"
                name="fromAddress"
                value={address}
                disabled
              />
              <small id="fromAddressHelp" className="form-text text-muted">
                This is teacher's wallet address.
              </small>
            </div>
            <div className="form-group py-2">
              <label htmlFor="toAddress">To address</label>
              <input
                type="text"
                className="form-control"
                id="toAddress"
                aria-describedby="toAddressHelp"
                name="toAddress"
                value={values.toAddress}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <small id="toAddressHelp" className="form-text text-muted">
                The address of the wallet where you want to send the mark to.
                (This is field is disabled by default because we are in the
                blockchain of student)
              </small>
            </div>
            <div className="form-group py-2">
              <label htmlFor="studentID">studentID</label>
              <input
                type="number"
                className="form-control"
                id="studentID"
                aria-describedby="studentIDHelp"
                name="studentID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.studentID}
              />
              {errors.studentID && touched.studentID ? (
                <div className="alert alert-danger" role="alert">
                  {errors.studentID}
                </div>
              ) : null}
            </div>
            <div className="form-group py-2">
              <label htmlFor="studentName">studentName</label>
              <input
                type="text"
                className="form-control"
                id="studentName"
                aria-describedby="studentNameHelp"
                name="studentName"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.studentName}
              />
              {errors.studentName && touched.studentName ? (
                <div className="alert alert-danger" role="alert">
                  {errors.studentName}
                </div>
              ) : null}
            </div>
            <div className="form-group py-2">
              <label htmlFor="DOB">DOB</label>
              <input
                type="text"
                className="form-control"
                id="DOB"
                aria-describedby="DOBHelp"
                name="DOB"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.DOB}
              />
              {errors.DOB && touched.DOB ? (
                <div className="alert alert-danger" role="alert">
                  {errors.DOB}
                </div>
              ) : null}
            </div>
            <div className="form-group py-2">
              <label htmlFor="studentPhone">studentPhone</label>
              <input
                type="text"
                className="form-control"
                id="studentPhone"
                aria-describedby="studentPhoneHelp"
                name="studentPhone"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.studentPhone}
              />
              {errors.studentPhone && touched.studentPhone ? (
                <div className="alert alert-danger" role="alert">
                  {errors.studentPhone}
                </div>
              ) : null}
            </div>
            <div className="form-group py-2">
              <label htmlFor="studentID">teacherID</label>
              <input
                type="number"
                className="form-control"
                id="teacherID"
                aria-describedby="teacherIDHelp"
                name="teacherID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.teacherID}
              />
              {errors.teacherID && touched.teacherID ? (
                <div className="alert alert-danger" role="alert">
                  {errors.teacherID}
                </div>
              ) : null}
            </div>
            <div className="form-group py-2">
              <label htmlFor="teacherName">teacherName</label>
              <input
                type="text"
                className="form-control"
                id="teacherName"
                aria-describedby="teacherNameHelp"
                name="teacherName"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.teacherName}
              />
              {errors.teacherName && touched.teacherName ? (
                <div className="alert alert-danger" role="alert">
                  {errors.teacherName}
                </div>
              ) : null}
            </div>
            <div className="form-group py-2">
              <label htmlFor="level">level</label>
              <input
                type="text"
                className="form-control"
                id="level"
                aria-describedby="levelHelp"
                name="level"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.level}
              />
              {errors.level && touched.level ? (
                <div className="alert alert-danger" role="alert">
                  {errors.level}
                </div>
              ) : null}
            </div>
            <div className="form-group py-2">
              <label htmlFor="department">department</label>
              <input
                type="text"
                className="form-control"
                id="department"
                aria-describedby="departmentHelp"
                name="department"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.department}
              />
              {errors.department && touched.department ? (
                <div className="alert alert-danger" role="alert">
                  {errors.department}
                </div>
              ) : null}
            </div>
            <div className="form-group py-2">
              <label htmlFor="teacherPhone">teacherPhone</label>
              <input
                type="text"
                className="form-control"
                id="teacherPhone"
                aria-describedby="teacherPhoneHelp"
                name="teacherPhone"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.teacherPhone}
              />
              {errors.teacherPhone && touched.teacherPhone ? (
                <div className="alert alert-danger" role="alert">
                  {errors.teacherPhone}
                </div>
              ) : null}
            </div>
            <div className="form-group py-2">
              <label htmlFor="courseName">courseName</label>
              <input
                type="text"
                className="form-control"
                id="courseName"
                aria-describedby="courseNameHelp"
                name="courseName"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.courseName}
              />
              {errors.courseName && touched.courseName ? (
                <div className="alert alert-danger" role="alert">
                  {errors.courseName}
                </div>
              ) : null}
            </div>
            <div className="form-group py-2">
              <label htmlFor="semester">semester</label>
              <input
                type="text"
                className="form-control"
                id="semester"
                aria-describedby="semesterHelp"
                name="semester"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.semester}
              />
              {errors.semester && touched.semester ? (
                <div className="alert alert-danger" role="alert">
                  {errors.semester}
                </div>
              ) : null}
            </div>
            <div className="form-group py-2">
              <label htmlFor="numberOfTC">numberOfTC</label>
              <input
                type="number"
                className="form-control"
                id="numberOfTC"
                aria-describedby="numberOfTCHelp"
                name="numberOfTC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.numberOfTC}
              />
              {errors.numberOfTC && touched.numberOfTC ? (
                <div className="alert alert-danger" role="alert">
                  {errors.numberOfTC}
                </div>
              ) : null}
            </div>
            <div className="form-group py-2">
              <label htmlFor="mark1">mark1</label>
              <input
                type="number"
                className="form-control"
                id="mark1"
                aria-describedby="mark1Help"
                name="mark1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.mark1}
              />
              {errors.mark1 && touched.mark1 ? (
                <div className="alert alert-danger" role="alert">
                  {errors.mark1}
                </div>
              ) : null}
            </div>
            <div className="form-group py-2">
              <label htmlFor="mark2">mark2</label>
              <input
                type="number"
                className="form-control"
                id="mark2"
                aria-describedby="mark2Help"
                name="mark2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.mark2}
              />
              {errors.mark2 && touched.mark2 ? (
                <div className="alert alert-danger" role="alert">
                  {errors.mark2}
                </div>
              ) : null}
            </div>
            <div className="form-group py-2">
              <label htmlFor="mark3">mark3</label>
              <input
                type="number"
                className="form-control"
                id="mark3"
                aria-describedby="mark3Help"
                name="mark3"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.mark3}
              />
              {errors.mark3 && touched.mark3 ? (
                <div className="alert alert-danger" role="alert">
                  {errors.mark3}
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-2"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CreateTransaction;
