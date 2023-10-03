import "./App.css";
import React from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import Modal from "./components/Modal/Modal";

function App() {
  const [records, setRecords] = React.useState([]);
  const [additionalData, setAdditionalData] = React.useState({});
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      const recordsResponse = await axios.get(
        "http://localhost/getAllData.php"
      );

      setRecords(recordsResponse.data);
    }
    fetchData();
  }, []);

  const onClickAdditionalData = async (id) => {
    const additionalDataResponse = await axios.get(
      "http://localhost/getAdditionalData.php?getId=" + id
    );

    setAdditionalData(additionalDataResponse.data);
    setIsOpen(true);
  };

  const onClickClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <main>
          {records.length && (
            <Table
              records={records}
              onClickAdditionalData={onClickAdditionalData}
            />
          )}
        </main>
        {isOpen && <Modal additionalData={additionalData} onClickClose={onClickClose} />}
      </div>
    </div>
  );
}

export default App;
