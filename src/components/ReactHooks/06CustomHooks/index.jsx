import useFetch from "./useFetch";

const App = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users/1/posts");
  return (
    <div>
      {data &&
        data.map((d) => {
          return (
            <ul>
              <h3>Post</h3>
              <li key={Math.random() * 100}>{d.title}</li>
            </ul>
          );
        })}
    </div>
  );
};

export default App;
