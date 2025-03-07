import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVacuumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VacuumW100'

      short_name='Vacuum'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160.12-106Q121-106 93.5-133.38 66-160.76 66-199.88 66-239 93.38-266.5q27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5Zm-.12-28q27 0 46.5-19.5T226-200q0-27-19.5-46.5T160-266q-27 0-46.5 19.5T94-200q0 27 19.5 46.5T160-134Zm147 28q5-8 8-14.5t6-13.5h105v-306q0-43.73-31.14-74.86Q363.73-546 320-546H134v174q-6 1-14 2.5t-14 3.5v-208h120v-162q0-66.12 45.92-112.06T383.93-894q48.07 0 87.57 26 39.5 26 57.5 70l281 664h84v28H666v-28h114L504-786q-16-37-48-58.5T384.42-866Q330-866 292-828t-38 92v162h66q56 0 95 39t39 95v334H307Zm-27-234Z"/>
    </Icon>
  );
});

IconMaterialVacuumW100.displayName = 'OnesyIconMaterialVacuumW100';

export default IconMaterialVacuumW100;
