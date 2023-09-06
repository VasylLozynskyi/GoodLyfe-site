import { siteData } from "data/siteData/data";
import { RoutersContainer } from "Pages/RoutersContainer";
import "./scss/start-app.scss"

function App() {
  return <div className="App">
    <RoutersContainer data={siteData}/>
  </div>;
}

export default App;


{/* <ButtonComponent btnName={data.name} typeBtn={data.typeBtn} /*stylebtn is only 1, 2 or 3 type />  */}