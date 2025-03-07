import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBathPrivate = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BathPrivate'

      short_name='BathPrivate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M770-580q-29 0-49.5-21T700-651q0-29 20.5-49.5T770-721q29 0 49.5 20.5T840-651q0 29-20.5 50T770-580Zm-580 0q-29 0-49.5-21T120-651q0-29 20.5-49.5T190-721q29 0 49.5 20.5T260-651q0 29-20.5 50T190-580Zm142-60q10-35 4.5-61.5T310-753q-32-38-42-77.5t1-89.5h61q-7 43-1.5 72.5T355-792q32 38 41 74t-2 78h-62Zm120 0q10-35 4.5-61.5T430-753q-32-38-42-77.5t1-89.5h61q-8 45-2 73.5t27 54.5q32 38 41 74t-2 78h-62Zm120 0q10-35 4.5-61.5T550-753q-32-38-42-77.5t1-89.5h61q-8 45-2 73.5t27 54.5q32 38 41 74t-2 78h-62ZM80-80v-360h40v-25q0-31 21.5-53t52.5-22q16 0 30.5 7.5T250-514l65 74h330l65-74q11-11 25.5-18.5T766-540q31 0 52.5 22t21.5 53v25h40v360H80Zm80-200h640v-80H160v80Zm0 120h640v-40H160v40Zm320-120Zm0 80Zm0 0v-80 80Z"/>
    </Icon>
  );
});

IconMaterialBathPrivate.displayName = 'OnesyIconMaterialBathPrivate';

export default IconMaterialBathPrivate;
