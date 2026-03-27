import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
  {
    index: true,
    element: <Page2 />,
  },
  {
    path: ":id",
    element: <UrlParameter />,
  },
];
