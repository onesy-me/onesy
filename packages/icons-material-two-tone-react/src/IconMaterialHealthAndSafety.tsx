import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHealthAndSafety = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthAndSafety'

      short_name='HealthAndSafety'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M12,4.14L6,6.39v4.7c0,4,2.55,7.7,6,8.83c3.45-1.13,6-4.82,6-8.83v-4.7L12,4.14z M16,13h-2.5v2.5h-3V13H8v-3 h2.5V7.5h3V10H16V13z" opacity=".3"/><path d="M10.5,13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3V13z M12,2L4,5v6.09c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V5L12,2 z M18,11.09c0,4-2.55,7.7-6,8.83c-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25l6,2.25V11.09z"/>
    </Icon>
  );
});

IconMaterialHealthAndSafety.displayName = 'OnesyIconMaterialHealthAndSafety';

export default IconMaterialHealthAndSafety;
