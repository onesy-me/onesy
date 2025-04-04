import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFunctions = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Functions'

      short_name='Functions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 17h-7l5-5-5-5h7V4H6v2l6.5 6L6 18v2h12z"/>
    </Icon>
  );
});

IconMaterialFunctions.displayName = 'OnesyIconMaterialFunctions';

export default IconMaterialFunctions;
