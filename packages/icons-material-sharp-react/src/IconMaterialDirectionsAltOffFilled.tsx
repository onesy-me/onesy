import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsAltOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltOffFilled'

      short_name='DirectionsAltOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M819-28 640-208 480-48 48-480l160-160L27-820l57-57L876-85l-57 57ZM467-380l-43 44 56 56 44-44-57-56Zm287 58L638-438l42-42-200-200-42 42-116-116 158-158 432 432-158 158ZM280-520v80h127l-80-80h-47Z"/>
    </Icon>
  );
});

IconMaterialDirectionsAltOffFilled.displayName = 'OnesyIconMaterialDirectionsAltOffFilled';

export default IconMaterialDirectionsAltOffFilled;
