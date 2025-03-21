import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReadinessScore = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReadinessScore'

      short_name='ReadinessScore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M295-119q-36-1-68.5-18.5T165-189q-40-48-62.5-114.5T80-440q0-83 31.5-156T197-723q54-54 127-85.5T480-840q83 0 156 32t127 87q54 55 85.5 129T880-433q0 77-25 144t-71 113q-28 28-59 42.5T662-119q-18 0-36-4.5T590-137l-56-28q-12-6-25.5-9t-28.5-3q-15 0-28.5 3t-25.5 9l-56 28q-19 10-37.5 14.5T295-119Zm2-80q9 0 18.5-2t18.5-7l56-28q21-11 43.5-16t45.5-5q23 0 46 5t44 16l57 28q9 5 18 7t18 2q19 0 36-10t34-30q32-38 50-91t18-109q0-134-93-227.5T480-760q-134 0-227 94t-93 228q0 57 18.5 111t51.5 91q17 20 33 28.5t34 8.5Zm183-281Zm0 120q33 0 56.5-23.5T560-440q0-8-1.5-16t-4.5-16l50-67q11 14 18 28.5t12 30.5q5 16 15 28t26 12q20 0 31.5-17.5T713-496q-20-81-85-132.5T480-680q-84 0-148.5 51.5T247-496q-5 21 6.5 38.5T285-440q16 0 26-12t15-28q14-53 56.5-86.5T480-600q16 0 31.5 3t29.5 9l-51 69q-2 0-5-.5t-5-.5q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Z"/>
    </Icon>
  );
});

IconMaterialReadinessScore.displayName = 'OnesyIconMaterialReadinessScore';

export default IconMaterialReadinessScore;
