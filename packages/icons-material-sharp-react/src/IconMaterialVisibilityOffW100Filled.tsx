import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVisibilityOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VisibilityOffW100Filled'

      short_name='VisibilityOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M788-132 636-284q-24 12-64.5 22T480-252q-125 0-229-68T96-500q24-53 64-99.5t84-76.5L132-788l20-20 656 656-20 20ZM480-364q15 0 34-4t28-10L358-562q-6 11-10 29.5t-4 32.5q0 57 39.5 96.5T480-364Zm256 24L613-462q1-6 2-16t1-22q0-57-39.5-96.5T480-636q-12 0-21 1.5t-16 4.5l-97-96q33-12 67-17t67-5q124 0 229 68t155 180q-21 45-52.5 85T736-340ZM588-486 467-606q24-5 47.5 3t40.5 25q18 17 27 41t6 51Z"/>
    </Icon>
  );
});

IconMaterialVisibilityOffW100Filled.displayName = 'OnesyIconMaterialVisibilityOffW100Filled';

export default IconMaterialVisibilityOffW100Filled;
