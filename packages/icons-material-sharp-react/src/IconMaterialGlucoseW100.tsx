import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGlucoseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlucoseW100'

      short_name='Glucose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m286-428 59-45 127 81v-422h28v474l-152-97-21 14 225 263h289v-394h28v422H540L286-428Zm309-38v-218h28v218h-28Zm123 0v-168h28v168h-28ZM180-586q-48 0-81-32.5T66-698q0-29 11-49t59-74l44-50 43 50q48 55 59.5 74.5T294-698q0 46-33 79t-81 33Zm0-28q36 0 61-24.5t25-59.5q0-20-10.5-37.5T202-803l-23-25-21 25q-42 48-53 66t-11 39q0 35 25 59.5t61 24.5Zm0-84Zm661 538H552h289Z"/>
    </Icon>
  );
});

IconMaterialGlucoseW100.displayName = 'OnesyIconMaterialGlucoseW100';

export default IconMaterialGlucoseW100;
