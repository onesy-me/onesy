import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNearMeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeW100Filled'

      short_name='NearMe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m528-206-92-232-232-94-2-16 556-212-214 554h-16Z"/>
    </Icon>
  );
});

IconMaterialNearMeW100Filled.displayName = 'OnesyIconMaterialNearMeW100Filled';

export default IconMaterialNearMeW100Filled;
