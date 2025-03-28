import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWallLampW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallLampW100'

      short_name='WallLamp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M171.96-172q-5.96 0-9.96-4.02-4-4.03-4-9.98v-160q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v160q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM334-468h372l-72-240H406l-72 240Zm0 0h372-372Zm-54 216q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h160q27 0 46.5-19.5T506-346v-94H336q-15 0-24-12.5t-4-26.5l70.08-236.4Q381-725 389-730.5t18-5.5h226q10 0 18 5.5t10.92 15.1L732-479q5 14-4 26.5T704-440H534v93.88q0 39.12-27.42 66.62Q479.17-252 440-252H280Z"/>
    </Icon>
  );
});

IconMaterialWallLampW100.displayName = 'OnesyIconMaterialWallLampW100';

export default IconMaterialWallLampW100;
