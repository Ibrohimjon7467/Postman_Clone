import { useState } from "react";
import ResponseBodyTab from "./ResponseBodyTab";
import ResponseHeadersTab from "./ResponseHeadersTab";
import Tab from "./Tab";

const Response = ({ response }) => {
  const [activeResponseTab, setActiveResponseTab] = useState("Body");
  let { status, statusText, customData } = response;
  if (!customData) customData = { time: 0 };
  const { time } = customData;

  return (
    <div className="mt-4 flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Response</h1>
      <div className="flex gap-4">
        <span>
          Status:{" "}
          <span className="font-bold">
            {status} {statusText}
          </span>
        </span>
      </div>
      <div className="tabs w-fit tabs-boxed">
        <Tab name="Body"
          activeOptionTab={activeResponseTab}
          setActiveOptionTab={setActiveResponseTab}
        />
        <Tab name="Headers"
          activeOptionTab={activeResponseTab}
          setActiveOptionTab={setActiveResponseTab}
        />
      </div>
      {activeResponseTab === "Body" ? (
        <ResponseBodyTab data={response.data} />
      ) : (
        <ResponseHeadersTab response={response} />
      )}
    </div>
  );
};

export default Response;
