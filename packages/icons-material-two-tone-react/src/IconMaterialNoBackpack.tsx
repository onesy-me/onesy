import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoBackpack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoBackpack'

      short_name='NoBackpack'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24" y="0"/><path d="M18,15.17V8c0-1.1-0.9-2-2-2H8.83l6,6h1.67v1.67L18,15.17z M17.17,20l-6-6H7.5v-2h1.67L6,8.83V20H17.17z" opacity=".3"/><path d="M6.98,4.15c0.01,0,0.01-0.01,0.02-0.01V2h3v2h4V2h3v2.14c1.72,0.45,3,2,3,3.86v9.17l-2-2V8c0-1.1-0.9-2-2-2H8.83L6.98,4.15z M14.83,12l1.67,1.67V12H14.83z M19.78,22.61l-0.85-0.85C18.65,21.91,18.34,22,18,22H6c-1.1,0-2-0.9-2-2V8 c0-0.36,0.06-0.69,0.15-1.02L1.39,4.22l1.41-1.41l18.38,18.38L19.78,22.61z M17.17,20l-6-6H7.5v-2h1.67L6,8.83V20H17.17z"/>
    </Icon>
  );
});

IconMaterialNoBackpack.displayName = 'OnesyIconMaterialNoBackpack';

export default IconMaterialNoBackpack;
