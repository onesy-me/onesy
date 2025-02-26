import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPausePresentationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PausePresentationW100'

      short_name='PausePresentation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M416-346q6 0 10-4t4-10v-240q0-6-4-10t-10-4q-6 0-10 4t-4 10v240q0 6 4 10t10 4Zm128 0q6 0 10-4t4-10v-240q0-6-4-10t-10-4q-6 0-10 4t-4 10v240q0 6 4 10t10 4ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialPausePresentationW100.displayName = 'OnesyIconMaterialPausePresentationW100';

export default IconMaterialPausePresentationW100;
