import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotAccessible = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotAccessible'

      short_name='NotAccessible'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><path d="M10,4c0-1.1,0.9-2,2-2s2,0.9,2,2s-0.9,2-2,2S10,5.1,10,4z M19,13v-2c-1.54,0.02-3.09-0.75-4.07-1.83l-1.29-1.43 C13.4,7.5,13.2,7.38,13.01,7.28c-0.36-0.19-0.72-0.3-1.2-0.26c-0.49,0.04-0.91,0.27-1.23,0.61L14,11.05 C15.29,12.12,17.25,12.99,19,13z M10,20c-1.66,0-3-1.34-3-3c0-1.31,0.84-2.41,2-2.83V12.1c-2.28,0.46-4,2.48-4,4.9 c0,2.76,2.24,5,5,5c2.42,0,4.44-1.72,4.9-4h-2.07C12.42,19.16,11.31,20,10,20z M2.81,2.81L1.39,4.22L10,12.83V15c0,1.1,0.9,2,2,2 h2.17l5.61,5.61l1.41-1.41L2.81,2.81z"/></g>
    </Icon>
  );
});

IconMaterialNotAccessible.displayName = 'OnesyIconMaterialNotAccessible';

export default IconMaterialNotAccessible;
