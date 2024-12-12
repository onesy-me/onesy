import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartFilled'

      short_name='LineStart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M180-380q-42 0-71-29t-29-71q0-42 29-71t71-29q31 0 56 17t36 43h608v80H272q-11 26-36 43t-56 17Z"/>
    </Icon>
  );
});

IconMaterialLineStartFilled.displayName = 'OnesyIconMaterialLineStartFilled';

export default IconMaterialLineStartFilled;
