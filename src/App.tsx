import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Rzeszow", "Wrocław", "Warszawa"];
  const handleSelectItem = (item: string) => {
    console.log("selected:", item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectedItems={handleSelectItem}
      />
    </div>
  );
}

export default App;
