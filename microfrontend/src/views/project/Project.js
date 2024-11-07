import React, { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary';

const Project = React.lazy(() =>
    import('microfrontend1/Pages')
    .then(module => ({ default: module.Project }))
    .catch(() => ({
      default: () => <div>Microfrontend is not available</div>,
    }))
  );

const ProjectPage = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={<div>Something went wrong while loading MicroFrontend1!</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Project />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default ProjectPage
