import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTooltip2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tooltip2W100Filled'

      short_name='Tooltip2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-413h268v-28H266v28Zm0-120h428v-28H266v28Zm0-120h428v-28H266v28Zm-74 387q-24.75 0-42.37-17.63Q132-301.25 132-326v-442q0-24.75 17.63-42.38Q167.25-828 192-828h576q24.75 0 42.38 17.62Q828-792.75 828-768v442q0 24.75-17.62 42.37Q792.75-266 768-266H567l-62 95q-4.55 7-10.98 10.5-6.44 3.5-14.02 3.5-7.58 0-14.02-3.5Q459.55-164 455-171l-62-95H192Z"/>
    </Icon>
  );
});

IconMaterialTooltip2W100Filled.displayName = 'OnesyIconMaterialTooltip2W100Filled';

export default IconMaterialTooltip2W100Filled;
