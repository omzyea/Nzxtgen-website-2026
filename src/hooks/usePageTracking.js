/**
 * usePageTracking Hook
 * Automatically tracks page views when routes change in React Router
 * 
 * Usage:
 * 1. Import this hook in your App.js or main layout component
 * 2. Call usePageTracking() at the top of your component
 * 
 * Example:
 * ```jsx
 * import { usePageTracking } from './hooks/usePageTracking';
 * 
 * function App() {
 *   usePageTracking();
 *   return (
 *     // your app content
 *   );
 * }
 * ```
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics';

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    const pageTitle = document.title;
    const pagePath = location.pathname + location.search;
    
    trackPageView(pagePath, pageTitle);
  }, [location]);
};

export default usePageTracking;