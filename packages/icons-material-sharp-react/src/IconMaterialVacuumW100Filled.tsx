import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVacuumW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VacuumW100Filled'

      short_name='Vacuum'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160.12-106Q121-106 93.5-133.38 66-160.76 66-199.88 66-239 93.38-266.5q27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5Zm-.12-28q27 0 46.5-19.5T226-200q0-27-19.5-46.5T160-266q-27 0-46.5 19.5T94-200q0 27 19.5 46.5T160-134Zm147 28q13-21 20-45.07 7-24.08 7-48.93 0-72.21-50.9-123.1Q232.21-374 160-374q-14 0-27 2.5t-27 5.5v-208h120v-162q0-66.12 45.92-112.06T383.93-894q48.07 0 87.57 26 39.5 26 57.5 70l281 664h84v28H666v-28h114L504-786q-16-36-48.42-58-32.43-22-71.58-22-53.75 0-91.87 38.12Q254-789.75 254-736v162h66q56 0 95 39t39 95v334H307Z"/>
    </Icon>
  );
});

IconMaterialVacuumW100Filled.displayName = 'OnesyIconMaterialVacuumW100Filled';

export default IconMaterialVacuumW100Filled;
