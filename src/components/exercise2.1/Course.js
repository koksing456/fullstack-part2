import Header from "./Header";
import Content from "./Content";
import Sum from "./Sum";

const Course = ({ courses }) => {
  return courses.map((c) => (
    <div key={c.id}>
      <Header text={c.name}  />
      <Content course={c} />
      <Sum course={c} />
    </div>
  ));
};

export default Course;
