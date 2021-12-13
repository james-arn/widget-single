import { useEffect, useState } from "react";
import Widget from "./components/Widget";
import { ContainerStyled } from "./styles/container.styled";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState({ error: false, message: "" });
  //api
  useEffect(async () => {
    try {
      const data = await fetch("https://getgreenspark.mocklab.io/products");
      if (data.status !== 200) {
        throw new Error(error);
      }
      const response = await data.json();
      setFetchedData(response);
    } catch (error) {
      setError({ error: true, message: error.message });
    }
  }, []);

  return (
    <div>
      <ContainerStyled>
        <div className="container container-outer">
          <div className="container container-inner">
            <h1 className="title">Per product widgets</h1>
            <span className="title-line"></span>
            <div className="body">
              <Widget widgetNum="1" fetchedData={fetchedData} />
              <Widget widgetNum="2" fetchedData={fetchedData} />
              <Widget widgetNum="3" fetchedData={fetchedData} />
            </div>
          </div>
        </div>
      </ContainerStyled>
    </div>
  );
}
export default App;
