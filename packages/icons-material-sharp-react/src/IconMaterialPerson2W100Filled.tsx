import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPerson2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person2W100Filled'

      short_name='Person2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M394-512q-14 0-23-10t-7-24l12-95q5-38 35-62.5t69-24.5q39 0 69 24.5t35 62.5l12 95q2 14-7 24t-23 10H394ZM212-232v-52q0-22 13.5-41.5T262-356q55-26 109.5-39T480-408q54 0 108.5 13T698-356q23 11 36.5 30.5T748-284v52H212Z"/>
    </Icon>
  );
});

IconMaterialPerson2W100Filled.displayName = 'OnesyIconMaterialPerson2W100Filled';

export default IconMaterialPerson2W100Filled;
