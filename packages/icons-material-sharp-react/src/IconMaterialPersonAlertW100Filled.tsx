import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonAlertW100Filled'

      short_name='PersonAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800.04-534q-11.04 0-18.54-7.46-7.5-7.47-7.5-18.5 0-11.04 7.46-18.54 7.47-7.5 18.5-7.5 11.04 0 18.54 7.46 7.5 7.47 7.5 18.5 0 11.04-7.46 18.54-7.47 7.5-18.5 7.5ZM786-666v-148h28v148h-28ZM360-512q-44.55 0-76.27-31.72Q252-575.45 252-620t31.73-76.28Q315.45-728 360-728t76.27 31.72Q468-664.55 468-620t-31.73 76.28Q404.55-512 360-512ZM92-232v-52q0-22 13.5-41.5T142-356q55-26 109.5-39T360-408q54 0 108.5 13T578-356q23 11 36.5 30.5T628-284v52H92Z"/>
    </Icon>
  );
});

IconMaterialPersonAlertW100Filled.displayName = 'OnesyIconMaterialPersonAlertW100Filled';

export default IconMaterialPersonAlertW100Filled;
