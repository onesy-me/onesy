import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhonelinkLockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkLockW100'

      short_name='PhonelinkLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M622-338q-14 0-25-11t-11-25v-104q0-14 11-25t25-11h5v-40q0-29 19.5-48.5T695-622q29 0 48.5 19.5T763-554v40h5q14 0 24 11t10 25v104q0 14-11 25t-25 11H622Zm33-176h80v-40q0-17-11.5-28.5T695-594q-17 0-28.5 11.5T655-554v40ZM312-92q-25 0-42.5-17.5T252-152v-656q0-25 17.5-42.5T312-868h336q25 0 42.5 17.5T708-808v110q0 6-4 10t-10 4q-6 0-10-4t-4-10v-48H280v532h400v-48q0-6 4-10t10-4q6 0 10 4t4 10v110q0 25-17.5 42.5T648-92H312Zm-32-94v34q0 12 10 22t22 10h336q12 0 22-10t10-22v-34H280Zm0-588h400v-34q0-12-10-22t-22-10H312q-12 0-22 10t-10 22v34Zm0 0v-66 66Zm0 588v66-66Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkLockW100.displayName = 'OnesyIconMaterialPhonelinkLockW100';

export default IconMaterialPhonelinkLockW100;
