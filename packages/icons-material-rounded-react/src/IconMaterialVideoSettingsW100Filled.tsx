import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoSettingsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoSettingsW100Filled'

      short_name='VideoSettings'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-212H192q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v154q0 6-4 10t-10 4q-6 0-10-4t-4-10v-154q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9h274q6 0 10 4t4 10q0 6-4 10t-10 4Zm-60-177v-182q0-14 12-20.5t23 1.5l141 91q11 7 11 19t-11 19l-141 91q-11 8-23 1.5T406-389Zm307 221-1-13q-26-5-42-15t-30-25l-13 7q-5 3-10.5 2t-8.5-6l-1-2q-4-5-3-11t6-10l11-9q-9-24-9-46t9-46l-11-9q-5-4-6-10t3-11l1-2q3-5 8.5-6t10.5 2l13 7q14-15 30-25t42-15l1-13q1-6 5-10t10-4q6 0 10 4t5 10l1 13q26 5 42 15t30 25l13-7q5-3 10.5-2t8.5 6l1 2q4 5 3 11t-6 10l-11 9q9 24 9 46t-9 46l11 9q5 4 6 10t-3 11l-1 2q-3 5-8.5 6t-10.5-2l-13-7q-14 15-30 25t-42 15l-1 13q-1 6-5 10t-10 4q-6 0-10-4t-5-10Zm15-40q36 0 62-26t26-62q0-36-26-62t-62-26q-36 0-62 26t-26 62q0 36 26 62t62 26Z"/>
    </Icon>
  );
});

IconMaterialVideoSettingsW100Filled.displayName = 'OnesyIconMaterialVideoSettingsW100Filled';

export default IconMaterialVideoSettingsW100Filled;
