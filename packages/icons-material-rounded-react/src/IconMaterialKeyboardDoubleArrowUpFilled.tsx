import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardDoubleArrowUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowUpFilled'

      short_name='KeyboardDoubleArrowUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-407 324-252q-11 11-27.5 11.5T268-252q-11-11-11-28t11-28l184-184q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l184 184q11 11 11.5 27.5T692-252q-11 11-28 11t-28-11L480-407Zm0-240L324-492q-11 11-27.5 11.5T268-492q-11-11-11-28t11-28l184-184q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l184 184q11 11 11.5 27.5T692-492q-11 11-28 11t-28-11L480-647Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowUpFilled.displayName = 'OnesyIconMaterialKeyboardDoubleArrowUpFilled';

export default IconMaterialKeyboardDoubleArrowUpFilled;
