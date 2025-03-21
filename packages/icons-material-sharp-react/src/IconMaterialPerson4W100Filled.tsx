import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPerson4W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person4W100Filled'

      short_name='Person4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-472q-45 0-76.5-31.5T372-580v-101q0-17 11.5-29t28.5-12q11 0 19.5 5t14.5 13q6-8 14.5-13t19.5-5q11 0 19.5 5t14.5 13q6-8 14.5-13t19.5-5q17 0 28.5 12t11.5 29v101q0 45-31.5 76.5T480-472ZM212-192v-52q0-22 13.5-41.5T262-316q55-26 109.5-39T480-368q54 0 108.5 13T698-316q23 11 36.5 30.5T748-244v52H212Z"/>
    </Icon>
  );
});

IconMaterialPerson4W100Filled.displayName = 'OnesyIconMaterialPerson4W100Filled';

export default IconMaterialPerson4W100Filled;
