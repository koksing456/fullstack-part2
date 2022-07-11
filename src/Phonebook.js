import { useState } from "react";
import Header from "./components/exercise2.1/Header";
import Input from "./components/Input";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [filteredPerson, setFilteredPersons] = useState(persons)
  const [newName, setNewName] = useState("new Name");
  const [newNumber, setNewNumber] = useState("123");
  const [searchName, setSearchName] = useState("");

  const handleNameInputOnChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberInputOnChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const personExist = persons.filter((p) => p.name === newName);
    const personIsExist = personExist.length > 0;
    if (personIsExist) return alert(`${newName} is already added to phonebook`);

    const personObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    setPersons(persons.concat(personObj));
  };

  const handleSearchName = (event) => {
    
  };

  return (
    <div>
      <Header text="Phonebook" />
      <Input
        label="filter show with"
        value={searchName}
        onChange={handleSearchName}
      />
      <form onSubmit={addPerson}>
        <Input
          label="name"
          value={newName}
          onChange={handleNameInputOnChange}
        />
        <Input
          label="number"
          value={newNumber}
          onChange={handleNumberInputOnChange}
        />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Header text="Numbers" />
      {filteredPerson.map((p) => (
        <p key={p.id}>
          {p.name} {p.number}
        </p>
      ))}
    </div>
  );
};

export default App;
