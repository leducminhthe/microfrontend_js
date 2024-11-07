import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const Chat = React.lazy(() =>
  import('microfrontend1/Pages')
  .then(module => ({ default: module.Chat }))
  .catch(() => ({
    default: () => <div>Microfrontend is not available</div>,
  }))
);

const Typography = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={<div>Something went wrong while loading MicroFrontend1!</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Chat test={1232131221111} />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default Typography
