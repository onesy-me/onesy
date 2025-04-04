import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRotateRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RotateRightW100Filled'

      short_name='RotateRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M772-478q-5 0-9-3t-5-8q-6-29-17-56t-28-52q-3-4-3-8.5t4-8.5q5-5 11.5-4.5T736-613q18 26 30.5 55.5T785-494q2 7-2 11.5t-11 4.5ZM522-149q0-5 3.5-9.5t8.5-5.5q28-5 55-15.5t52-27.5q4-3 8.5-3t8.5 4q5 5 4.5 11t-5.5 10q-26 18-56 30.5T539-135q-7 2-12-2t-5-12Zm192-113q-3-3-3.5-8t2.5-9q17-25 28-52t17-56q1-5 5-8t9-3q7 0 11 4.5t2 11.5q-6 32-18 62t-31 57q-4 5-10.5 5.5T714-262ZM426-135q-109-20-180.5-105T174-438q0-128 90-218t218-90h38l-80-80q-5-5-5-10t5-10q5-5 10-5t10 5l93 93q5 5 7 10t2 11q0 6-2 11t-7 10l-93 93q-5 5-10 5t-10-5q-5-5-5-10t5-10l80-80h-38q-117 0-198.5 81.5T202-438q0 101 64.5 178.5T431-162q5 1 8 5t3 9q0 7-4.5 11t-11.5 2Z"/>
    </Icon>
  );
});

IconMaterialRotateRightW100Filled.displayName = 'OnesyIconMaterialRotateRightW100Filled';

export default IconMaterialRotateRightW100Filled;
