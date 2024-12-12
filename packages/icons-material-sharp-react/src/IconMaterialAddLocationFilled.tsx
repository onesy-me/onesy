import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddLocationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationFilled'

      short_name='AddLocation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-400h80v-120h120v-80H520v-120h-80v120H320v80h120v120Zm40 320Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialAddLocationFilled.displayName = 'OnesyIconMaterialAddLocationFilled';

export default IconMaterialAddLocationFilled;
