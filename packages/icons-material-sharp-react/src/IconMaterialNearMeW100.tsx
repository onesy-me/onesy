import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNearMeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeW100'

      short_name='NearMe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m528-206-92-232-232-94-2-16 556-212-214 554h-16Zm8-58 174-448-450 172 196 80 80 196Zm-80-196Z"/>
    </Icon>
  );
});

IconMaterialNearMeW100.displayName = 'OnesyIconMaterialNearMeW100';

export default IconMaterialNearMeW100;
