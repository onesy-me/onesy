import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsOff'

      short_name='DirectionsOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M819-28 640-208 480-48 48-480l160-160L27-820l57-57L876-85l-57 57ZM584-264 264-584 160-480l320 320 104-104Zm170-58-56-56 102-102-320-320-102 102-56-56 158-158 432 432-158 158ZM538-538ZM424-424Zm-104 64v-200h81l80 80h-81v120h-80Zm298-98 62-62-140-140v100h-24l102 102Z"/>
    </Icon>
  );
});

IconMaterialDirectionsOff.displayName = 'OnesyIconMaterialDirectionsOff';

export default IconMaterialDirectionsOff;
