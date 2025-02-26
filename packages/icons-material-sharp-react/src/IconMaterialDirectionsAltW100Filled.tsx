import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltW100Filled'

      short_name='DirectionsAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-122 122-480l358-358 358 358-358 358Zm0-194 164-164-164-164-20 20 130 130H316v28h274L460-336l20 20Z"/>
    </Icon>
  );
});

IconMaterialDirectionsAltW100Filled.displayName = 'OnesyIconMaterialDirectionsAltW100Filled';

export default IconMaterialDirectionsAltW100Filled;
