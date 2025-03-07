import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCastWarningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastWarningW100Filled'

      short_name='CastWarning'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M734-616v-28h-28v28h28ZM132-276q26 0 45 19t19 45h-64v-64Zm0-128q80 0 136 55.89 56 55.88 56 136.11h-28q0-67-48-114.5T132-376v-28Zm0-148q71 0 132.66 26.59t107.91 72.84q46.25 46.25 72.84 107.91Q472-283 472-212h-28q0-64.81-24.5-121.4-24.5-56.6-67-99.1-42.5-42.5-99.1-67Q196.81-524 132-524v-28Zm440 340q0-91-34.5-171t-94.32-140.02q-59.82-60.02-140-94.5T132-652v-96h345q-2 7-2.5 13.5T473-720q-10 109 63 189.5T720-450q28.21 0 55.1-6.5Q802-463 828-475v263H572Zm148-338q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm-14-130h28v-108h-28v108Z"/>
    </Icon>
  );
});

IconMaterialCastWarningW100Filled.displayName = 'OnesyIconMaterialCastWarningW100Filled';

export default IconMaterialCastWarningW100Filled;
