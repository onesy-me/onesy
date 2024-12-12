import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSquareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SquareW100Filled'

      short_name='Square'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h496q24.75 0 42.38 17.62Q788-752.75 788-728v496q0 24.75-17.62 42.37Q752.75-172 728-172H232Z"/>
    </Icon>
  );
});

IconMaterialSquareW100Filled.displayName = 'OnesyIconMaterialSquareW100Filled';

export default IconMaterialSquareW100Filled;
