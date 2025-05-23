import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBolt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bolt'

      short_name='Bolt'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M11,21h-1l1-7H7.5c-0.88,0-0.33-0.75-0.31-0.78C8.48,10.94,10.42,7.54,13.01,3h1l-1,7h3.51c0.4,0,0.62,0.19,0.4,0.66 C12.97,17.55,11,21,11,21z"/></g>
    </Icon>
  );
});

IconMaterialBolt.displayName = 'OnesyIconMaterialBolt';

export default IconMaterialBolt;
