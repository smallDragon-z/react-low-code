import { startTransition, Suspense, useEffect } from 'react';

const Data = () => {
  useEffect(() => {
    startTransition(() => {
      console.log(111);
    });
  }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>Data</div>
    </Suspense>
  );
};
export default Data;
