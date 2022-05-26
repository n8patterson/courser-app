export const StudentPicker = ({ name, onChange, students }) => {
  return (
    <select name={name} onChange={onChange}>
      <option value={""} key={-1} selected="selected">
        No Student Selected
      </option>
      {students.map((student) => {
        return (
          <option value={student} key={student}>
            {student}
          </option>
        );
      })}
    </select>
  );
};
