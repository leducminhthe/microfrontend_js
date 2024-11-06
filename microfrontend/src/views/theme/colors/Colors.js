import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const MicroFrontend1 = React.lazy(() =>
  import('microfrontend1/App').catch(() => ({
    default: () => <div>Microfrontend1 is not available</div>,
  }))
);

const Colors = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={<div>Something went wrong while loading MicroFrontend1!</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <MicroFrontend1 test={1232131221111} />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default Colors
