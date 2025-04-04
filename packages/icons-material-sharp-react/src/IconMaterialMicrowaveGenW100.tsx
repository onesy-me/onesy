import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicrowaveGenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicrowaveGenW100'

      short_name='MicrowaveGen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm86-86h308v-308H246v308Zm28-28v-252h252v252H274Zm398-224h56v-56h-56v56Zm0 126h56v-56h-56v56Zm0 126h56v-56h-56v56Zm-512 86v-480 480Z"/>
    </Icon>
  );
});

IconMaterialMicrowaveGenW100.displayName = 'OnesyIconMaterialMicrowaveGenW100';

export default IconMaterialMicrowaveGenW100;
