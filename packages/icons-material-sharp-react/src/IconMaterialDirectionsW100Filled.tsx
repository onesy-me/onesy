import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsW100Filled'

      short_name='Directions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-386h28v-120h192v63l77-77-77-78v64H346v148Zm134 264L122-480l358-358 358 358-358 358Z"/>
    </Icon>
  );
});

IconMaterialDirectionsW100Filled.displayName = 'OnesyIconMaterialDirectionsW100Filled';

export default IconMaterialDirectionsW100Filled;
