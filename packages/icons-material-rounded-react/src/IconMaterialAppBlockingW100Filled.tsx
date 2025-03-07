import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAppBlockingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppBlockingW100Filled'

      short_name='AppBlocking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M694-336q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42Zm0-28q20 0 37.59-6 17.59-6 34.41-18L602-552q-12 16.82-18 34.41-6 17.59-6 37.59 0 48 34 82t82 34Zm92-44q14-18 19-35t5-37q0-48-34-82t-82-34q-20 0-37.59 6-17.59 6-34.41 18l164 164ZM312-92q-24.75 0-42.37-17.63Q252-127.25 252-152v-656q0-24.75 17.63-42.38Q287.25-868 312-868h336q24.75 0 42.38 17.62Q708-832.75 708-808v110q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-48H280v532h400v-48q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v110q0 24.75-17.62 42.37Q672.75-92 648-92H312Z"/>
    </Icon>
  );
});

IconMaterialAppBlockingW100Filled.displayName = 'OnesyIconMaterialAppBlockingW100Filled';

export default IconMaterialAppBlockingW100Filled;
