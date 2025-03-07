import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTouchpadMouseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchpadMouseW100Filled'

      short_name='TouchpadMouse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-132q-70 0-119-49t-49-119v-86h336v86q0 70-49 119t-119 49Zm-468-80q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v17q0 14-11.5 20t-23.5-2q-30-17-64-26t-69-9q-112 0-190 78t-78 190v120q0 14 1 27t4 27q3 14-5 24t-21 10H192Zm300-202q0-68 44-118t110-56v174H492Zm182 0v-174q66 6 110 56t44 118H674Z"/>
    </Icon>
  );
});

IconMaterialTouchpadMouseW100Filled.displayName = 'OnesyIconMaterialTouchpadMouseW100Filled';

export default IconMaterialTouchpadMouseW100Filled;
