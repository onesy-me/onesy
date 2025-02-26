import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGlucoseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlucoseW100Filled'

      short_name='Glucose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M540-132 286-428l59-45 127 81v-422h28v348h95v-218h28v218h95v-168h28v168h95v-88h28v422H540ZM180-586q-48 0-81-32.5T66-698q0-29 11-49t59-74l44-50 43 50q48 55 59.5 74.5T294-698q0 46-33 79t-81 33Z"/>
    </Icon>
  );
});

IconMaterialGlucoseW100Filled.displayName = 'OnesyIconMaterialGlucoseW100Filled';

export default IconMaterialGlucoseW100Filled;
