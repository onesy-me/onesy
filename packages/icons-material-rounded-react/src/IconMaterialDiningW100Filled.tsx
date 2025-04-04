import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDiningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiningW100Filled'

      short_name='Dining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M350-216q6 0 10-4t4-10v-242q29-5 48.5-25.5T432-548v-142q0-6-4-10t-10-4q-6 0-10 4t-4 10v136h-40v-136q0-6-4-10t-10-4q-6 0-10 4t-4 10v136h-40v-136q0-6-4-10t-10-4q-6 0-10 4t-4 10v142q0 30 19.5 50.5T336-472v242q0 6 4 10t10 4Zm240 0q6 0 10-4t4-10v-234q32-11 51-43t19-77q0-52-24-86t-60-34q-36 0-60 34t-24 86q0 45 19 77t51 43v234q0 6 4 10t10 4Zm-398 84q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h576q26 0 43 17t17 43v576q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialDiningW100Filled.displayName = 'OnesyIconMaterialDiningW100Filled';

export default IconMaterialDiningW100Filled;
