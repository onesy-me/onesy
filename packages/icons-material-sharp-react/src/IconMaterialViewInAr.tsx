import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewInAr = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewInAr'

      short_name='ViewInAr'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-158 200-319v-322l280-161 280 161v322L480-158Zm-40-115v-184l-160-93v185l160 92Zm80 0 160-92v-185l-160 93v184ZM80-680v-200h200v80H160v120H80ZM280-80H80v-200h80v120h120v80Zm400 0v-80h120v-120h80v200H680Zm120-600v-120H680v-80h200v200h-80ZM480-526l158-93-158-91-158 91 158 93Zm0 45Zm0-45Zm40 69Zm-80 0Z"/>
    </Icon>
  );
});

IconMaterialViewInAr.displayName = 'OnesyIconMaterialViewInAr';

export default IconMaterialViewInAr;
