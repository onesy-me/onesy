import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashlightOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOffW100'

      short_name='FlashlightOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M771-122 561-332v140q0 24.75-17.62 42.37Q525.75-132 501-132h-96q-24.75 0-42.37-17.63Q345-167.25 345-192v-356L113-780q-4-4-4.5-9.5T113-800q5-5 10-5t10 5l658 658q4 4 4.5 9.5T791-122q-5 5-10 5t-10-5Zm-366-38h96q14 0 23-9t9-23v-168L373-520v328q0 14 9 23t23 9Zm236-608v94q0 8.82-2.5 16.91T631-641l-74 127q-3.67 6.26-8.83 6.63Q543-507 538-510t-6.5-8q-1.5-5 2.5-11l79-135v-42H347q-6.1 0-10.05-4.04-3.95-4.03-3.95-10 0-5.96 4.02-9.96 4.03-4 9.98-4h266v-34q0-14-9-23t-23-9H303q-5.67 0-9.33-4.04-3.67-4.03-3.67-10 0-5.96 4.02-9.96 4.03-4 9.98-4h277q24.75 0 42.38 17.62Q641-792.75 641-768ZM453-440ZM347-706Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOffW100.displayName = 'OnesyIconMaterialFlashlightOffW100';

export default IconMaterialFlashlightOffW100;
