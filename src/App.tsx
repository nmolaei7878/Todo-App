import { Route, Routes } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout";
import Important from "./pages/important/important";
import Completed from "./pages/completed/completed";
import NotFound from "./pages/notFound";
import MyDay from "./pages/myDay/myDay";
import AllTodos from "./pages/all/all";
import Theme from "./utils/theme";

function App() {
  return (
    <Theme>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<AllTodos />} />
          <Route path="/myday" element={<MyDay />} />
          <Route path="/important" element={<Important />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BaseLayout>
    </Theme>
  );
}

export default App;
