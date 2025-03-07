import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStatMinus1W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StatMinus1W100'

      short_name='StatMinus1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-380 276-584l20-20 184 184 184-184 20 20-204 204Z"/>
    </Icon>
  );
});

IconMaterialStatMinus1W100.displayName = 'OnesyIconMaterialStatMinus1W100';

export default IconMaterialStatMinus1W100;
