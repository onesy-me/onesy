import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackspace = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Backspace'

      short_name='Backspace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-200q-20 0-37.5-9T294-234L153-434q-15-21-15-46t15-46l141-200q11-16 28.5-25t37.5-9h400q33 0 56.5 23.5T840-680v400q0 33-23.5 56.5T760-200H360Zm400-80v-400 400Zm-400 0h400v-400H360L218-480l142 200Zm200-144 76 76q11 11 28 11t28-11q11-11 11-28t-11-28l-76-76 76-76q11-11 11-28t-11-28q-11-11-28-11t-28 11l-76 76-76-76q-11-11-28-11t-28 11q-11 11-11 28t11 28l76 76-76 76q-11 11-11 28t11 28q11 11 28 11t28-11l76-76Z"/>
    </Icon>
  );
});

IconMaterialBackspace.displayName = 'OnesyIconMaterialBackspace';

export default IconMaterialBackspace;
