import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStraighten = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Straighten'

      short_name='Straighten'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240q-33 0-56.5-23.5T80-320v-320q0-33 23.5-56.5T160-720h640q33 0 56.5 23.5T880-640v320q0 33-23.5 56.5T800-240H160Zm0-80h640v-320H680v120q0 17-11.5 28.5T640-480q-17 0-28.5-11.5T600-520v-120h-80v120q0 17-11.5 28.5T480-480q-17 0-28.5-11.5T440-520v-120h-80v120q0 17-11.5 28.5T320-480q-17 0-28.5-11.5T280-520v-120H160v320Zm160-160Zm160 0Zm160 0Zm-160 0Z"/>
    </Icon>
  );
});

IconMaterialStraighten.displayName = 'OnesyIconMaterialStraighten';

export default IconMaterialStraighten;
