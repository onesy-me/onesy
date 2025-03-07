import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUpgradeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpgradeW100'

      short_name='Upgrade'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-212q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h320q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H320Zm159.96-128q-5.96 0-9.96-4.02-4-4.03-4-9.98v-342L344-574q-4 4-9 3.5t-9.17-4.5q-3.83-3.67-3.83-9.33 0-5.67 4-9.67l133-133q5-5 10.13-7 5.14-2 11-2 5.87 0 10.87 2 5 2 10 7l134 134q4 4 4 9t-4 9.17q-3.67 3.83-9.33 3.83-5.67 0-9.67-4L494-696v342q0 5.95-4.04 9.98-4.03 4.02-10 4.02Z"/>
    </Icon>
  );
});

IconMaterialUpgradeW100.displayName = 'OnesyIconMaterialUpgradeW100';

export default IconMaterialUpgradeW100;
