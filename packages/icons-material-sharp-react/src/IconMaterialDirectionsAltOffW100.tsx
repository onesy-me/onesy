import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsAltOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltOffW100'

      short_name='DirectionsAltOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M852-68 639-281 480-122 122-480l159-159L90-830l20-20L872-88l-20 20ZM620-300l-78-78-62 62-20-20 62-62-68-68H316v-28h110L300-620 160-480l320 320 140-140Zm95-57-19-19 104-104-320-320-104 104-19-19 123-123 358 358-123 123ZM613-459l20-20-164-164-20 20 164 164Zm-82-82Zm-71 81Z"/>
    </Icon>
  );
});

IconMaterialDirectionsAltOffW100.displayName = 'OnesyIconMaterialDirectionsAltOffW100';

export default IconMaterialDirectionsAltOffW100;
