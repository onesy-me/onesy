import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeMaxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMaxW100Filled'

      short_name='HomeMax'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-224v-28H226q-56 0-95-39t-39-95v-188q0-56 39-95t95-39h508q56 0 95 39t39 95v188q0 56-39 95t-95 39H628v28H332Z"/>
    </Icon>
  );
});

IconMaterialHomeMaxW100Filled.displayName = 'OnesyIconMaterialHomeMaxW100Filled';

export default IconMaterialHomeMaxW100Filled;
