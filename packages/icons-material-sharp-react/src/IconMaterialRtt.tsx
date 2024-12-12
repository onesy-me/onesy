import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRtt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rtt'

      short_name='Rtt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m365-120 16-102h93l82-516H456l-29 180H321l45-282h519l-45 282H734l28-180H662l-82 516h93l-16 102H365ZM150-680l13-80h150l-13 80H150Zm-25 160 13-80h150l-13 80H125ZM75-200l12-80h250l-12 80H75Zm25-160 13-80h250l-13 80H100Z"/>
    </Icon>
  );
});

IconMaterialRtt.displayName = 'OnesyIconMaterialRtt';

export default IconMaterialRtt;
