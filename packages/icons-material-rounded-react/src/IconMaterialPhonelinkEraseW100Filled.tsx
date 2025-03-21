import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhonelinkEraseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkEraseW100Filled'

      short_name='PhonelinkErase'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m654-460-94 94q-4 4-9.5 4.5T540-366q-5-5-5-10t5-10l94-94-94-94q-4-4-4.5-9.5T540-594q5-5 10-5t10 5l94 94 94-94q4-4 9.5-4.5T768-594q5 5 5 10t-5 10l-94 94 94 94q4 4 4.5 9.5T768-366q-5 5-10 5t-10-5l-94-94ZM272-92q-25 0-42.5-17.5T212-152v-656q0-25 17.5-42.5T272-868h336q25 0 42.5 17.5T668-808v110q0 6-4 10t-10 4q-6 0-10-4t-4-10v-48H240v532h400v-48q0-6 4-10t10-4q6 0 10 4t4 10v110q0 25-17.5 42.5T608-92H272Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkEraseW100Filled.displayName = 'OnesyIconMaterialPhonelinkEraseW100Filled';

export default IconMaterialPhonelinkEraseW100Filled;
