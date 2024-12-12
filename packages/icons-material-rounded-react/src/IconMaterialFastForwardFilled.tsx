import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFastForwardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastForwardFilled'

      short_name='FastForward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M100-315v-330q0-18 12-29t28-11q5 0 11 1t11 5l248 166q9 6 13.5 14.5T428-480q0 10-4.5 18.5T410-447L162-281q-5 4-11 5t-11 1q-16 0-28-11t-12-29Zm400 0v-330q0-18 12-29t28-11q5 0 11 1t11 5l248 166q9 6 13.5 14.5T828-480q0 10-4.5 18.5T810-447L562-281q-5 4-11 5t-11 1q-16 0-28-11t-12-29Z"/>
    </Icon>
  );
});

IconMaterialFastForwardFilled.displayName = 'OnesyIconMaterialFastForwardFilled';

export default IconMaterialFastForwardFilled;
