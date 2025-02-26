import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVillaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VillaW100Filled'

      short_name='Villa'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M412-172v-196q0-24.75 17.63-42.38Q447.25-428 472-428h204q0-23 16.43-39.5t39.5-16.5q23.07 0 39.57 16.45T788-428v256H628v-84q0-11-8.05-19.5T600-284q-11 0-19.5 8.5T572-256v84H412Zm-240 0v-391q0-18.67 10.43-33.97Q192.86-612.28 210-619l349-134q15-6 28 3.07 13 9.06 13 24.93v269H474q-37.5 0-63.75 26.25T384-366v194H172Z"/>
    </Icon>
  );
});

IconMaterialVillaW100Filled.displayName = 'OnesyIconMaterialVillaW100Filled';

export default IconMaterialVillaW100Filled;
