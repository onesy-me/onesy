import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWarehouse = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Warehouse'

      short_name='Warehouse'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M20,8.35V19h-2v-8H6v8H4V8.35l8-3.2L20,8.35z M22,21V7L12,3L2,7v14h6v-8h8v8H22z M11,19H9v2h2V19z M13,16h-2v2h2V16z M15,19h-2v2h2V19z"/></g>
    </Icon>
  );
});

IconMaterialWarehouse.displayName = 'OnesyIconMaterialWarehouse';

export default IconMaterialWarehouse;
