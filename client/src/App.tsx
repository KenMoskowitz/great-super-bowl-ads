import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import IndexHome from "./pages/IndexHome";
import Home from "./pages/Home";
import EtsyCredits from "./pages/EtsyCredits";
import StateFarmAgent from "./pages/StateFarmAgent";
import BudweiserClydesdale2022 from "./pages/BudweiserClydesdale2022";
import BublyBuble from "./pages/BublyBuble";
import TMobileBag from "./pages/TMobileBag";
import BudweiserLostDog from "./pages/BudweiserLostDog";
import MMsJustMyShell from "./pages/MMsJustMyShell";
import VolkswagenTheForce from "./pages/VolkswagenTheForce";
import BudLightTPain from "./pages/BudLightTPain";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={IndexHome} />
      <Route path={"/budweiser-american-icons"} component={Home} />
      <Route path={"/etsy-thank-you-france"} component={EtsyCredits} />
      <Route path={"/state-farm-agent"} component={StateFarmAgent} />
      <Route path={"/budweiser-clydesdales-journey"} component={BudweiserClydesdale2022} />
      <Route path={"/bubly-buble"} component={BublyBuble} />
      <Route path={"/tmobile-bag-of-unlimited"} component={TMobileBag} />
      <Route path={"/budweiser-lost-dog"} component={BudweiserLostDog} />
      <Route path={"/mms-just-my-shell"} component={MMsJustMyShell} />
      <Route path={"/volkswagen-the-force"} component={VolkswagenTheForce} />
      <Route path={"/bud-light-tpain"} component={BudLightTPain} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
