import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoReadPauseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPauseW100Filled'

      short_name='AutoReadPause'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M416.04-426q5.96 0 9.96-4.02 4-4.03 4-9.98v-240q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v240q0 5.95 4.04 9.98 4.03 4.02 10 4.02Zm128 0q5.96 0 9.96-4.02 4-4.03 4-9.98v-240q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v240q0 5.95 4.04 9.98 4.03 4.02 10 4.02ZM244-292l-61 61q-14 14-32.5 6.34Q132-232.31 132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H244Z"/>
    </Icon>
  );
});

IconMaterialAutoReadPauseW100Filled.displayName = 'OnesyIconMaterialAutoReadPauseW100Filled';

export default IconMaterialAutoReadPauseW100Filled;
