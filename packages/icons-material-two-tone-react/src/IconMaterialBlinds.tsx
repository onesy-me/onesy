import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBlinds = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Blinds'

      short_name='Blinds'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="2" opacity=".3" width="8" x="6" y="9"/><rect height="2" opacity=".3" width="8" x="6" y="5"/><rect height="2" opacity=".3" width="2" x="16" y="9"/><rect height="2" opacity=".3" width="2" x="16" y="5"/><path d="M20,19V3H4v16H2v2h20v-2H20z M6,5h8v2H6V5z M6,9h8v2H6V9z M18,19H6v-6h8v1.82c-0.45,0.32-0.75,0.84-0.75,1.43 c0,0.97,0.78,1.75,1.75,1.75s1.75-0.78,1.75-1.75c0-0.59-0.3-1.12-0.75-1.43V13h2V19z M18,11h-2V9h2V11z M18,7h-2V5h2V7z"/></g></g>
    </Icon>
  );
});

IconMaterialBlinds.displayName = 'OnesyIconMaterialBlinds';

export default IconMaterialBlinds;
