import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSurroundSoundW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SurroundSoundW100'

      short_name='SurroundSound'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-396q35 0 59.5-24.5T564-480q0-35-24.5-59.5T480-564q-35 0-59.5 24.5T396-480q0 35 24.5 59.5T480-396Zm224-84q0 35-9.5 67.5T665-352q-4 5-4 11t5 11q5 5 10 4t9-6q23-32 35-70t12-78q0-40-12-78t-35-70q-4-5-9-6t-10 4q-5 5-5 11t4 11q20 28 29.5 60.5T704-480Zm-448 0q0-35 9.5-67.5T295-608q4-5 4-11t-5-11q-5-5-10-4t-9 6q-23 32-35 70t-12 78q0 40 12 78t35 70q4 5 9 6t10-4q5-5 5-11t-4-11q-20-28-29.5-60.5T256-480Zm-64 268q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialSurroundSoundW100.displayName = 'OnesyIconMaterialSurroundSoundW100';

export default IconMaterialSurroundSoundW100;
