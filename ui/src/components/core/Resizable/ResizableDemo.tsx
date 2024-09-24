import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./Resizable";

interface ResizableDemoProps {
  withHandle?: boolean;
}

const ResizableDemo: React.FC<ResizableDemoProps> = ({
  withHandle = false,
}) => {
  return (
    <ResizablePanelGroup direction="horizontal" className="bg-black p-5">
      <ResizablePanel>
        <div className="bg-primary text-white p-4">Panel 1</div>
      </ResizablePanel>
      <ResizableHandle withHandle={withHandle} />
      <ResizablePanel>
        <div className="bg-primary text-white p-4">Panel 2</div>
      </ResizablePanel>
      <ResizableHandle withHandle={withHandle} />
      <ResizablePanel>
        <div className="bg-primary text-white p-4">Panel 3</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default ResizableDemo;
