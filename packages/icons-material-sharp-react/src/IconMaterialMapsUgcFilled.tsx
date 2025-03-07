import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMapsUgcFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapsUgcFilled'

      short_name='MapsUgc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m40-40 78-268q-19-41-28.5-84T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80q-45 0-88-9.5T308-118L40-40Zm400-280h80v-120h120v-80H520v-120h-80v120H320v80h120v120Z"/>
    </Icon>
  );
});

IconMaterialMapsUgcFilled.displayName = 'OnesyIconMaterialMapsUgcFilled';

export default IconMaterialMapsUgcFilled;
