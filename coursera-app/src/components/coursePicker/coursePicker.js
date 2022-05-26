export const CoursePicker = ({ name, onChange, courses }) => {
  return (
    <select name={name} onChange={onChange}>
      <option value={""} key={-1}>
        No Course Selected
      </option>
      {courses.map((course) => {
        return (
          <option value={course} key={course._id}>
            {course.title}
          </option>
        );
      })}
    </select>
  );
};
