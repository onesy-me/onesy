import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGarageHomeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageHomeFilled'

      short_name='GarageHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120v-480l320-240 320 240v480H680v-400H280v400H160Zm200-80h240v-80H360v80Zm0-160h240v-80H360v80Z"/>
    </Icon>
  );
});

IconMaterialGarageHomeFilled.displayName = 'OnesyIconMaterialGarageHomeFilled';

export default IconMaterialGarageHomeFilled;
