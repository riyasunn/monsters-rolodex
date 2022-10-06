import { useState, useEffect } from "react";
import CardList61 from "./components/card-list/61card-list.component.func";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App61 = () => {
  const [searchField, setSearchField] = useState("");

  const [title, setTitle] = useState("");

  const [monsters, setMonsters] = useState([]);

  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log("render");

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (event) => {
    const searchTitleString = event.target.value.toLocaleLowerCase();
    setTitle(searchTitleString);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  //   console.log(monsters);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  //   console.log(filteredMonsters);

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <br />
      <SearchBox
        className="search-title"
        onChangeHandler={onTitleChange}
        placeholder="search title"
      />

      <CardList61 monsters={filteredMonsters} />
    </div>
  );
};

export default App61;
