import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNearMeDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeDisabledW100Filled'

      short_name='NearMeDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m528-206-92-232-232-94-2-16 206-78-225-225 20-20 668 668-20 20-228-228-79 205h-16Zm138-315L518-668l240-92-92 239Z"/>
    </Icon>
  );
});

IconMaterialNearMeDisabledW100Filled.displayName = 'OnesyIconMaterialNearMeDisabledW100Filled';

export default IconMaterialNearMeDisabledW100Filled;
