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
      <path d="M332-252H226q-56 0-95-39t-39-95v-188q0-56 39-95t95-39h508q56 0 95 39t39 95v188q0 56-39 95t-95 39H628q0 11-8.5 19.5T600-224H360q-11 0-19.5-8.5T332-252Z"/>
    </Icon>
  );
});

IconMaterialHomeMaxW100Filled.displayName = 'OnesyIconMaterialHomeMaxW100Filled';

export default IconMaterialHomeMaxW100Filled;
