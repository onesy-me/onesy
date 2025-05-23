import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallToAction = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallToAction'

      short_name='CallToAction'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 19h18V5H3v14zm2-4h14v3H5v-3z" opacity=".3"/><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 15h14v3H5z"/>
    </Icon>
  );
});

IconMaterialCallToAction.displayName = 'OnesyIconMaterialCallToAction';

export default IconMaterialCallToAction;
