import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedFilled'

      short_name='Bed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-200v-360h40v-200h720v200h40v360h-80v-80H160v80H80Zm440-360h240v-120H520v120Zm-320 0h240v-120H200v120Z"/>
    </Icon>
  );
});

IconMaterialBedFilled.displayName = 'OnesyIconMaterialBedFilled';

export default IconMaterialBedFilled;
