import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDualScreenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DualScreenW100Filled'

      short_name='DualScreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M249.85-222.31Q233-229 222.5-244.08 212-259.15 212-278v-520q0-16.52 14.5-25.76Q241-833 258-826l212 88q16.81 6.72 27.4 22.03Q508-700.67 508-682v475q0 31.73-26.5 49.87Q455-139 425.69-150.9l-175.84-71.41ZM588-252v-430q0-54-39.5-90T457-828h231q24.75 0 42.38 17.62Q748-792.75 748-768v456q0 24.75-17.62 42.37Q712.75-252 688-252H588Z"/>
    </Icon>
  );
});

IconMaterialDualScreenW100Filled.displayName = 'OnesyIconMaterialDualScreenW100Filled';

export default IconMaterialDualScreenW100Filled;
