import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableRows = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRows'

      short_name='TableRows'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M19,5v3H5V5H19z M19,10v4H5v-4H19z M5,19v-3h14v3H5z" opacity=".3"/><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,5v3H5V5H19z M19,10v4H5v-4H19z M5,19v-3h14v3H5z"/>
    </Icon>
  );
});

IconMaterialTableRows.displayName = 'OnesyIconMaterialTableRows';

export default IconMaterialTableRows;
