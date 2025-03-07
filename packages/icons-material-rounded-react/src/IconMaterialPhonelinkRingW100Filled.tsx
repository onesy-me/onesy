import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhonelinkRingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkRingW100Filled'

      short_name='PhonelinkRing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-92q-25 0-42.5-17.5T252-152v-656q0-25 17.5-42.5T312-868h336q25 0 42.5 17.5T708-808v110q0 6-4 10t-10 4q-6 0-10-4t-4-10v-48H280v532h400v-48q0-6 4-10t10-4q6 0 10 4t4 10v110q0 25-17.5 42.5T648-92H312Zm542-388q0 46-15.5 87.5T793-316q-5 5-10.5 6t-10.5-4q-5-5-4-10.5t5-10.5q26-30 39.5-67.5T826-480q0-40-13.5-77.5T773-625q-4-5-5-10.5t4-10.5q5-5 10.5-4t10.5 6q30 35 45.5 76.5T854-480Zm-154 94q-2 2-4.5 3t-5.5 1q-6 0-10-4t-4-10q0-3 1-5.5t3-4.5q1-1 1-1.5t1-.5q17-14 27-32.5t10-39.5q0-21-11-40.5T680-554q-2-2-3-4.5t-1-5.5q0-6 4-10t10-4q3 0 5.5 1t4.5 3q48 41 48 94t-48 94Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkRingW100Filled.displayName = 'OnesyIconMaterialPhonelinkRingW100Filled';

export default IconMaterialPhonelinkRingW100Filled;
