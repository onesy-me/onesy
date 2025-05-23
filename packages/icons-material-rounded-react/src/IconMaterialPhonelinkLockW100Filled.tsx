import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhonelinkLockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkLockW100Filled'

      short_name='PhonelinkLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M622-338q-14 0-25-11t-11-25v-104q0-14 11-25t25-11h5v-40q0-29 19.5-48.5T695-622q29 0 48.5 19.5T763-554v40h5q14 0 24 11t10 25v104q0 14-11 25t-25 11H622Zm33-176h80v-40q0-17-11.5-28.5T695-594q-17 0-28.5 11.5T655-554v40ZM312-92q-24.75 0-42.37-17.63Q252-127.25 252-152v-656q0-24.75 17.63-42.38Q287.25-868 312-868h336q24.75 0 42.38 17.62Q708-832.75 708-808v110q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-48H280v532h400v-48q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v110q0 24.75-17.62 42.37Q672.75-92 648-92H312Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkLockW100Filled.displayName = 'OnesyIconMaterialPhonelinkLockW100Filled';

export default IconMaterialPhonelinkLockW100Filled;
