import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRollerShades = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RollerShades'

      short_name='RollerShades'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="6" opacity=".3" width="12" x="6" y="5"/><path d="M20,19V3H4v16H2v2h20v-2H20z M18,19H6v-6h5v1.82c-0.45,0.32-0.75,0.84-0.75,1.43c0,0.97,0.78,1.75,1.75,1.75 s1.75-0.78,1.75-1.75c0-0.59-0.3-1.12-0.75-1.43V13h5V19z M18,11H6V5h12V11z"/></g></g>
    </Icon>
  );
});

IconMaterialRollerShades.displayName = 'OnesyIconMaterialRollerShades';

export default IconMaterialRollerShades;
