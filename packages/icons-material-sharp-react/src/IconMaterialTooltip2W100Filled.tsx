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
      <path d="M266-413h268v-28H266v28Zm0-120h428v-28H266v28Zm0-120h428v-28H266v28Zm214 521-87-134H132v-562h696v562H567l-87 134Z"/>
    </Icon>
  );
});

IconMaterialTooltip2W100Filled.displayName = 'OnesyIconMaterialTooltip2W100Filled';

export default IconMaterialTooltip2W100Filled;
