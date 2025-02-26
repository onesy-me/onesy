import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardCapslockBadgeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardCapslockBadgeFilled'

      short_name='KeyboardCapslockBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280h400v-80H280v80Zm56-160 144-144 144 144 56-56-200-200-200 200 56 56ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialKeyboardCapslockBadgeFilled.displayName = 'OnesyIconMaterialKeyboardCapslockBadgeFilled';

export default IconMaterialKeyboardCapslockBadgeFilled;
