import * as ReactDOM from "react-dom/client";

export const renderElementTo =
  (element: JSX.Element) => (target: HTMLElement) => {
    const root = ReactDOM.createRoot(target);
    root.render(element);
  };
