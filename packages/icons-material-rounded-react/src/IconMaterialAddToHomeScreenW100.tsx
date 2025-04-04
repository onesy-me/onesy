import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddToHomeScreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToHomeScreenW100'

      short_name='AddToHomeScreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M352-92q-25 0-42.5-17.5T292-152v-110q0-6 4-10t10-4q6 0 10 4t4 10v48h400v-532H320v48q0 6-4 10t-10 4q-6 0-10-4t-4-10v-110q0-25 17.5-42.5T352-868h336q25 0 42.5 17.5T748-808v656q0 25-17.5 42.5T688-92H352Zm-32-94v34q0 12 10 22t22 10h336q12 0 22-10t10-22v-34H320Zm106-380L186-326q-4 4-9.5 4.5T166-326q-5-5-5-10t5-10l240-240H240q-6 0-10-4t-4-10q0-6 4-10t10-4h184q13 0 21.5 8.5T454-584v184q0 6-4 10t-10 4q-6 0-10-4t-4-10v-166ZM320-774h400v-34q0-12-10-22t-22-10H352q-12 0-22 10t-10 22v34Zm0 0v-66 66Zm0 588v66-66Z"/>
    </Icon>
  );
});

IconMaterialAddToHomeScreenW100.displayName = 'OnesyIconMaterialAddToHomeScreenW100';

export default IconMaterialAddToHomeScreenW100;
