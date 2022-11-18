import { ResultProvider } from "./context/ResultContext";
import AppRoutes from "./router/AppRoutes";

function App() {
  return (
    <div className="bg-gray-200 w-full h-screen  md:py-10 md:px-20">
      <ResultProvider>
        <AppRoutes />
      </ResultProvider>
    </div>
  );
}

export default App;
