// routes
import { Suspense } from 'react';
import Router from './routes/routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <Suspense fallback={<></>}>
        <Router />
      </Suspense>
    </ThemeConfig>
  );
}
