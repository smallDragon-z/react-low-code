import { Suspense } from 'react';

const About = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>About</div>
    </Suspense>
  );
};
export default About;
