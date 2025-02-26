import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRampLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RampLeftW100Filled'

      short_name='RampLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-187v-546l-80 80q-4 4-9.5 4.5T366-653q-5-5-5-10t5-10l93-93q5-5 10-7t11-2q6 0 11 2t10 7l93 93q4 4 4.5 9.5T594-653q-5 5-10 5t-10-5l-80-80v133q0 116 71 198t137 127q6 4 8.5 10t-2.5 11q-5 5-12.5 4t-14.5-6q-66-46-114-100t-73-111v280q0 6-4 10t-10 4q-6 0-10-4t-4-10Z"/>
    </Icon>
  );
});

IconMaterialRampLeftW100Filled.displayName = 'OnesyIconMaterialRampLeftW100Filled';

export default IconMaterialRampLeftW100Filled;
