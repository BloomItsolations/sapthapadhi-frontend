import { Helmet } from "react-helmet-async";

import AppView from "../../sections/dashbaord/AppView";

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | My welth help solution </title>
      </Helmet>

      <AppView />
    </>
  );
}
