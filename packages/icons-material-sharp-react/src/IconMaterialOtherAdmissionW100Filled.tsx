import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOtherAdmissionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OtherAdmissionW100Filled'

      short_name='OtherAdmission'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M614-208h52v-52h-52v52Zm80 0h52v-52h-52v52Zm80 0h52v-52h-52v52ZM720-86q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-86ZM306-614h348v-28H306v28Zm153 442H172v-616h616v289q-17-4-34-6.5t-34-2.5q-23 0-45 4t-43 11v-1H306v28h269q-34 22-59.5 52.5T474-346H306v28h157q-5 19-8 38.5t-3 39.5q0 14 1 34t6 34Z"/>
    </Icon>
  );
});

IconMaterialOtherAdmissionW100Filled.displayName = 'OnesyIconMaterialOtherAdmissionW100Filled';

export default IconMaterialOtherAdmissionW100Filled;
