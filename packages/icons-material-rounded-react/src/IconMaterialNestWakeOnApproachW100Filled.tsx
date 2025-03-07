import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestWakeOnApproachW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWakeOnApproachW100Filled'

      short_name='NestWakeOnApproach'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M785-512q-11 0-19.5-8.5T757-540v-198q0-11 8.5-19.5T785-766q11 0 19.5 8.5T813-738v198q0 11-8.5 19.5T785-512Zm-385 0q-44.55 0-76.27-31.72Q292-575.45 292-620t31.73-76.28Q355.45-728 400-728t76.27 31.72Q508-664.55 508-620t-31.73 76.28Q444.55-512 400-512ZM132-232v-52q0-22.79 14-41.9 14-19.1 36-30.1 52-24 106.69-38t111.5-14q56.81 0 111.31 14T618-356q22 11 36 30.1 14 19.11 14 41.9v52H132Z"/>
    </Icon>
  );
});

IconMaterialNestWakeOnApproachW100Filled.displayName = 'OnesyIconMaterialNestWakeOnApproachW100Filled';

export default IconMaterialNestWakeOnApproachW100Filled;
