import { Helmet } from "react-helmet-async";

import AppView from "../../sections/dashbaord/AppView";

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | sapthapadhi </title>
      </Helmet>

      <AppView />
    </>
  );
}
