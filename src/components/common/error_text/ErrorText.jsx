function ErrorText({ formik, field }) {
  return (
    <>
      {(formik.touched[field]|| formik.submitCount>0) && formik.errors[field] ? (
        <div className="text-danger text-sm">{formik.errors[field]}</div>
      ) : null}
    </>
  );
}
export default ErrorText;
