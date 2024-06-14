export default function Header() {
  const options = { day: "numeric", month: "long", year: "numeric" };
  const currentDate = new Date().toLocaleDateString("en-US", options);
  return (
    <div>
      <h1>To-Do List</h1>
      <span className="date">{currentDate}</span>
    </div>
  );
}
