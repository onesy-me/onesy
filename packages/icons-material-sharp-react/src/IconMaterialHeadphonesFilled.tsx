import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeadphonesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadphonesFilled'

      short_name='Headphones'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-120H120v-360q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480v360H600v-320h160v-40q0-117-81.5-198.5T480-760q-117 0-198.5 81.5T200-480v40h160v320Z"/>
    </Icon>
  );
});

IconMaterialHeadphonesFilled.displayName = 'OnesyIconMaterialHeadphonesFilled';

export default IconMaterialHeadphonesFilled;
