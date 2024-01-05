import ErrorBoundary from "./error/errorBoundary";
import Home from "./home/home";

export default function Page() {
 
  return (
    <ErrorBoundary>
      <Home></Home>
    </ErrorBoundary>
  );
}
