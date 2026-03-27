// import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
// import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
// import { SearchInput } from "./components/molecules/SearchInput";
// import { UserCard } from "./components/organisms/user/UserCard";
// import { HeaderOnly } from "./components/templates/HeaderOnly";
// import { BrowserRouter } from "react-router-dom";
// import { DefaultLayout } from "./components/templates/DefaultLayout";
import { RecoilRoot } from "recoil";
import "./App.css";
import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router/Router";

export const App = () => {
  // const user = {
  //   image:
  //     "https://images.unsplash.com/photo-1761839257789-20147513121a?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   name: "wang liming",
  //   email: "test@test.com",
  //   phone: "123-4567-4321",
  //   company: {
  //     name: "テスト株式会社",
  //   },
  //   web: "http://test.com",
  // };
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
};

// return (
//   <BrowserRouter>
//     <DefaultLayout>
//       <PrimaryButton>test1</PrimaryButton>
//       <SecondaryButton>test1</SecondaryButton>
//       <SearchInput></SearchInput>
//       <UserCard user={user} />
//     </DefaultLayout>
//   </BrowserRouter>
// );
