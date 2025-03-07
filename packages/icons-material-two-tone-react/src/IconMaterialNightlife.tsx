import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightlife = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Nightlife'

      short_name='Nightlife'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M1,5h14l-6,9v4h2v2H5v-2h2v-4L1,5z M10.1,9l1.4-2H4.49l1.4,2H10.1z M17,5h5v3h-3v9l0,0c0,1.66-1.34,3-3,3s-3-1.34-3-3 s1.34-3,3-3c0.35,0,0.69,0.06,1,0.17V5z"/></g></g></g>
    </Icon>
  );
});

IconMaterialNightlife.displayName = 'OnesyIconMaterialNightlife';

export default IconMaterialNightlife;
