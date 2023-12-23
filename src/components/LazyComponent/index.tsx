import React, { FC, Suspense } from 'react';

interface ILazyComponent {
  children: React.ReactNode;
}
const LazyComponent: FC<ILazyComponent> = (props) => {
  const { children } = props;
  return <Suspense children={children} fallback={<div>loading...</div>} />;
};

export default LazyComponent;
