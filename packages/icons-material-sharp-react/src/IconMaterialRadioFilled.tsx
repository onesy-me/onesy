import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRadioFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadioFilled'

      short_name='Radio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-614l556-226 26 66-330 134h548v640H80Zm240-120q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM160-520h480v-80h80v80h80v-120H160v120Z"/>
    </Icon>
  );
});

IconMaterialRadioFilled.displayName = 'OnesyIconMaterialRadioFilled';

export default IconMaterialRadioFilled;
