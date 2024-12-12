import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial3gMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3gMobiledataFilled'

      short_name='3gMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-280v-80h200v-80H120v-80h200v-80H120v-80h280v400H120Zm720-240v240H480v-400h360v80H560v240h200v-80H660v-80h180Z"/>
    </Icon>
  );
});

IconMaterial3gMobiledataFilled.displayName = 'OnesyIconMaterial3gMobiledataFilled';

export default IconMaterial3gMobiledataFilled;
