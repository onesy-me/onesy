import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsW100'

      short_name='Directions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-386h28v-120h192v63l77-77-77-78v64H346v148Zm134 264L122-480l358-358 358 358-358 358Zm0-38 320-320-320-320-320 320 320 320Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialDirectionsW100.displayName = 'OnesyIconMaterialDirectionsW100';

export default IconMaterialDirectionsW100;
