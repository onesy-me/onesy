import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialButtonsAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ButtonsAltW100Filled'

      short_name='ButtonsAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-292q-26 0-43-17t-17-43.33v-255.34Q132-634 149-651t43-17h576q26 0 43 17t17 43.33v255.34Q828-326 811-309t-43 17H192Zm114-174v66q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-66h66q6.07 0 10.03-3.95 3.97-3.96 3.97-10 0-6.05-3.97-10.05-3.96-4-10.03-4h-66v-66q0-6.07-3.95-10.03-3.96-3.97-10-3.97-6.05 0-10.05 3.97-4 3.96-4 10.03v66h-66q-6.07 0-10.03 3.95-3.97 3.96-3.97 10 0 6.05 3.97 10.05 3.96 4 10.03 4h66Z"/>
    </Icon>
  );
});

IconMaterialButtonsAltW100Filled.displayName = 'OnesyIconMaterialButtonsAltW100Filled';

export default IconMaterialButtonsAltW100Filled;
