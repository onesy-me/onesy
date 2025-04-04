import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraswitchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraswitchW100Filled'

      short_name='Cameraswitch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M352-332q-25 0-42.5-17.5T292-392v-176q0-25 17.5-42.5T352-628h28l31-31q5-5 10-7t11-2h96q6 0 11 2t10 7l31 31h28q25 0 42.5 17.5T668-568v176q0 25-17.5 42.5T608-332H352Zm128-98q21 0 35.5-14.5T530-480q0-21-14.5-35.5T480-530q-21 0-35.5 14.5T430-480q0 21 14.5 35.5T480-430Zm2 378q-161 0-282-103.5T55-417q-2-8 1-14.5t10-7.5q7-1 11 4.5t5 12.5q22 148 135 245t265 97l-72-72q-4-4-4.5-9.5T410-172q5-5 10-5t10 5L537-65q3 3 1.5 6.5T533-54q-13 2-25.5 2H482Zm-4-856q161 0 282 104t145 262q2 8-1 14t-10 7q-7 1-11-4.5t-5-12.5q-22-148-135-245t-265-97l72 72q4 4 4.5 9.5T550-788q-5 5-10 5t-10-5L423-895q-3-3-1.5-6.5t5.5-4.5q13-2 25.5-2H478Z"/>
    </Icon>
  );
});

IconMaterialCameraswitchW100Filled.displayName = 'OnesyIconMaterialCameraswitchW100Filled';

export default IconMaterialCameraswitchW100Filled;
