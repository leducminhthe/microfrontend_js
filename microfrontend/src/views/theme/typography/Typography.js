import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const Page2 = React.lazy(() =>
  import('microfrontend1/Pages')
  .then(module => ({ default: module.Page2 }))
  .catch(() => ({
    default: () => <div>Microfrontend is not available</div>,
  }))
);

const Typography = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={<div>Something went wrong while loading MicroFrontend1!</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Page2 test={1232131221111} />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default Typography
