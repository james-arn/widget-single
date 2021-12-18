import { useEffect, useState } from "react";
import Widget from "./components/Widget";
import { ContainerStyled } from "./styles/container.styled";
import { fetchData } from "./utils/fetchData";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState({ error: false, message: "" });
  //api
  useEffect(() => {
    fetchData(setFetchedData, error, setError);
  }, [error]);

  return (
    <div>
      <ContainerStyled>
        <div className="container container-outer">
          <div className="container container-inner">
            <h1 className="title">Per product widgets</h1>
            <span className="title-line"></span>
            <div className="body">
              <Widget widgetNum="1" fetchedData={fetchedData} />
            </div>
          </div>
        </div>
      </ContainerStyled>
    </div>
  );
}
export default App;
