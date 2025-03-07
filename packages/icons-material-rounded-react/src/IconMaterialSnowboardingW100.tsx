import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSnowboardingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnowboardingW100'

      short_name='Snowboarding'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M752-76q-8 0-17-1t-18-3L212-188q-40-8-69.5-32T97-279q-1-2-1-7t4.5-9.5q4.5-4.5 9.5-4.5 4 0 7.5 3t5.5 7q14 28 38.5 49t56.5 27l39 7 151-98-38-159q-3-11-.5-24.5T377-511l120-195H349l-67 109q-3 5-8.5 6t-10.5-2q-5-3-6.5-8.5T258-612l67-108q4-7 11-10.5t15-3.5h197q21 0 33.5 11.5T599-700l21 47q20 45 59 76.5t90 39.5q6 1 10.5 5.5T784-521q0 6-4 10t-10 3q-56-7-101.5-41T588-646L478-474l133 104q5 4 7.5 9t3.5 10l37 231 64 13q7 2 14.5 2.5t14.5.5q25 0 47.5-9t40.5-24l11-4q5 0 9 4t4 9q0 4-1.5 7t-3.5 5q-20 20-48.5 30T752-76Zm-123-50-34-217-174-123 18 154q1 8-2.5 15.5T426-284l-130 86 333 72Zm11-650q-26 0-45-19t-19-45q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19Z"/>
    </Icon>
  );
});

IconMaterialSnowboardingW100.displayName = 'OnesyIconMaterialSnowboardingW100';

export default IconMaterialSnowboardingW100;
