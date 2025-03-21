import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStatMinus2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StatMinus2'

      short_name='StatMinus2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-313 156-155q11-11 27.5-11.5T692-468q11 11 11 28t-11 28L537-257q-23 23-57 23t-57-23L268-412q-11-11-11.5-27.5T268-468q11-11 28-11t28 11l156 155Zm0-240 156-155q11-11 27.5-11.5T692-708q11 11 11 28t-11 28L537-497q-23 23-57 23t-57-23L268-652q-11-11-11.5-27.5T268-708q11-11 28-11t28 11l156 155Z"/>
    </Icon>
  );
});

IconMaterialStatMinus2.displayName = 'OnesyIconMaterialStatMinus2';

export default IconMaterialStatMinus2;
