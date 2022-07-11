const Sum = ({ course }) => {
  let initialIndex = 0;
  let total = course.parts.reduce((p, c) => p + c.exercises, initialIndex);
  return (
    <>
      <p>total of {total} exercises</p>
    </>
  );
};

export default Sum;
