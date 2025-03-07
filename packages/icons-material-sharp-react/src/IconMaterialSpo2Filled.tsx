import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpo2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Spo2Filled'

      short_name='Spo2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-160v-240h180v240H440Zm60-60h60v-120h-60v120ZM680-80v-150h120v-30H680v-60h180v150H740v30h120v60H680Zm-320-2Q237-96 158.5-187.5T80-408q0-100 79.5-217.5T400-880q132 112 209.5 212T710-480H360v398Z"/>
    </Icon>
  );
});

IconMaterialSpo2Filled.displayName = 'OnesyIconMaterialSpo2Filled';

export default IconMaterialSpo2Filled;
