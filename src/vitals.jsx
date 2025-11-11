import { getCLS, getFID, getLCP , getFCP , getTTFB } from 'web-vitals';

function sendToConsole(metric) {
  console.log(metric);
  // Or send to analytics service here (like Vercel Analytics, Sentry, etc.)
}

// getCLS(sendToConsole);
// getFID(sendToConsole);
// getLCP(sendToConsole);
// getFCP(sendToConsole);
// getTTFB(sendToConsole);
