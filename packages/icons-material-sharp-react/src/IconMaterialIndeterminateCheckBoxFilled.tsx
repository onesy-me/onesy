import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIndeterminateCheckBoxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IndeterminateCheckBoxFilled'

      short_name='IndeterminateCheckBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-440h400v-80H280v80ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialIndeterminateCheckBoxFilled.displayName = 'OnesyIconMaterialIndeterminateCheckBoxFilled';

export default IconMaterialIndeterminateCheckBoxFilled;
