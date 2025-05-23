import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRollerShadesClosed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RollerShadesClosed'

      short_name='RollerShadesClosed'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><g opacity=".3"><rect height="10" width="12" x="6" y="5"/></g><path d="M20,19V3H4v16H2v2h8.25c0,0.97,0.78,1.75,1.75,1.75s1.75-0.78,1.75-1.75H22v-2H20z M11,19H6v-2h5V19z M18,19h-5v-2h5V19z M18,15H6V5h12V15z"/></g></g>
    </Icon>
  );
});

IconMaterialRollerShadesClosed.displayName = 'OnesyIconMaterialRollerShadesClosed';

export default IconMaterialRollerShadesClosed;
