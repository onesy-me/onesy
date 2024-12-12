import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNearMeDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeDisabledW100'

      short_name='NearMeDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m528-206-92-232-232-94-2-16 206-78-225-225 20-20 668 668-20 20-228-228-79 205h-16Zm138-315-22-21 66-170-171 65-21-21 240-92-92 239ZM536-264l65-169-172-172-169 65 196 80 80 196Zm56-330Zm-77 75Z"/>
    </Icon>
  );
});

IconMaterialNearMeDisabledW100.displayName = 'OnesyIconMaterialNearMeDisabledW100';

export default IconMaterialNearMeDisabledW100;
