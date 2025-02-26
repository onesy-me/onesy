import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBloodtypeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BloodtypeFilled'

      short_name='Bloodtype'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-137 0-228.5-94T160-408q0-100 79.5-217.5T480-880q161 137 240.5 254.5T800-408q0 140-91.5 234T480-80ZM360-240h240v-80H360v80Zm80-120h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Z"/>
    </Icon>
  );
});

IconMaterialBloodtypeFilled.displayName = 'OnesyIconMaterialBloodtypeFilled';

export default IconMaterialBloodtypeFilled;
