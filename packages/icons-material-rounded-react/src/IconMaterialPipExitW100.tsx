import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPipExitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PipExitW100'

      short_name='PipExit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-222q0-6 4-10t10-4q6 0 10 4t4 10v222q0 14 9 23t23 9h576q14 0 23-9t9-23v-416q0-14-9-23t-23-9H466q-6 0-10-4t-4-10q0-6 4-10t10-4h302q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm315-300 176 176q4 4 9.5 4.5T703-336q5-5 5-10t-5-10L526-532h127q6 0 10-4t4-10q0-6-4-10t-10-4H509q-13 0-21.5 8.5T479-530v144q0 6 4 10t10 4q6 0 10-4t4-10v-126Zm-345-96q-13 0-21.5-8.5T132-638v-80q0-13 8.5-21.5T162-748h160q13 0 21.5 8.5T352-718v80q0 13-8.5 21.5T322-608H162Zm318 128Z"/>
    </Icon>
  );
});

IconMaterialPipExitW100.displayName = 'OnesyIconMaterialPipExitW100';

export default IconMaterialPipExitW100;
