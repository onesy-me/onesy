import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditLocationAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocationAltW100Filled'

      short_name='EditLocationAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-131Q345-252 276-357t-69-190q0-120 78.5-200.5T480-828q24 0 47 3.5t44 11.5L386-627v161h161l187-187q9 25 14 51t5 55q0 85-69 190T480-131Zm6-435v-20l200-200 20 20-200 200h-20Zm248-228-20-20 32-32 20 20-32 32Z"/>
    </Icon>
  );
});

IconMaterialEditLocationAltW100Filled.displayName = 'OnesyIconMaterialEditLocationAltW100Filled';

export default IconMaterialEditLocationAltW100Filled;
