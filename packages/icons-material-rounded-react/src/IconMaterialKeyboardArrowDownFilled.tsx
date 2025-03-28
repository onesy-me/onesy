import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardArrowDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowDownFilled'

      short_name='KeyboardArrowDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowDownFilled.displayName = 'OnesyIconMaterialKeyboardArrowDownFilled';

export default IconMaterialKeyboardArrowDownFilled;
