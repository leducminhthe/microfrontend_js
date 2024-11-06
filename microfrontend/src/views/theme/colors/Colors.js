import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const Page1 = React.lazy(() =>
  import('microfrontend1/Pages')
  .then(module => ({ default: module.Page1 }))
  .catch(() => ({
    default: () => <div>Microfrontend is not available</div>,
  }))
);

const Colors = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={<div>Something went wrong while loading MicroFrontend1!</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Page1 test={1232131221111} />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default Colors
