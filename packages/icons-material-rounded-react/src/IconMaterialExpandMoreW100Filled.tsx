import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandMoreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandMoreW100Filled'

      short_name='ExpandMore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-392q-6 0-11-2t-10-7L286-574q-4-4-4.5-9.5T286-594q5-5 10-5t10 5l174 174 174-174q4-4 9.5-4.5T674-594q5 5 5 10t-5 10L501-401q-5 5-10 7t-11 2Z"/>
    </Icon>
  );
});

IconMaterialExpandMoreW100Filled.displayName = 'OnesyIconMaterialExpandMoreW100Filled';

export default IconMaterialExpandMoreW100Filled;
