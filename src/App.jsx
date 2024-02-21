import { useState } from "react";

import Tab from "./components/Tab";
import HeaderTab from "./components/HeaderTab";
import RequestForm from "./components/RequestForm";
import JSONTab from "./components/JSONTab";
import { ThreeDots } from "react-loader-spinner";
import Response from "./components/Response";
import Credit from "./components/Credit";

function generateUUID() {

  let d = new Date().getTime();
  let d2 = (typeof performance !== "undefined" && performance.now && performance.now() * 1000) || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

function App() {
  const [activeOptionTab, setActiveOptionTab] = useState("Headers");
  const [response, setResponse] = useState();
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [headers, setHeaders] = useState([
    {
      key: "Content-Type",
      value: "application/json",
      id: generateUUID(),
    },
    {
      key: "",
      value: "",
      id: generateUUID(),
    },
  ]);

  return (
    <main className="mx-auto py-10 max-w-xl">
      <RequestForm
        setResponse={setResponse}
        setLoading={setLoading}
        headers={headers}
        body={body}
      />

      <div className="tabs mt-6 w-fit tabs-boxed">
        <Tab name={"Headers"}
          activeOptionTab={activeOptionTab}
          setActiveOptionTab={setActiveOptionTab}
        />
        <Tab name={"JSON"}
          activeOptionTab={activeOptionTab}
          setActiveOptionTab={setActiveOptionTab}
        />
      </div>
      <HeaderTab headers={headers}
        setHeaders={setHeaders}
        activeOptionTab={activeOptionTab}
        generateUUID={generateUUID}
      />
      <JSONTab body={body}
        setBody={setBody}
        activeOptionTab={activeOptionTab}
      />
      {loading ? (
        <>
          <div className="w-full flex mt-6 justify-center">
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        </>
      ) : (
        response && <Response response={response} />
      )}
      <Credit />
    </main>
  );
}

export default App;