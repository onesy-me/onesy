import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRiceBowlW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RiceBowlW100Filled'

      short_name='RiceBowl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372-132v-53q-99-39-169.5-115.5T132-480q0-72.21 27.39-135.72 27.39-63.51 74.35-110.49 46.96-46.98 110.43-74.38Q407.65-828 479.83-828q72.17 0 135.73 27.41 63.56 27.4 110.57 74.38 47.02 46.98 74.44 110.49Q828-552.21 828-480q0 103-70.5 179.5T588-185v53H372Zm2-348h212v-302q-26.5-9-53-13.5t-53-4.5q-26.5 0-53 4.5T374-782v302Zm-214 0h186v-291q-85 40-135.5 118.5T160-480Zm454 0h186q0-94-50.5-172.5T614-771v291Z"/>
    </Icon>
  );
});

IconMaterialRiceBowlW100Filled.displayName = 'OnesyIconMaterialRiceBowlW100Filled';

export default IconMaterialRiceBowlW100Filled;
