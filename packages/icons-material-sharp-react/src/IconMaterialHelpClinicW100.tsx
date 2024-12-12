import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHelpClinicW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HelpClinicW100'

      short_name='HelpClinic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-296h28v-148h-28v148Zm14-236q11 0 19.5-8.5T508-560q0-11-8.5-19.5T480-588q-11 0-19.5 8.5T452-560q0 11 8.5 19.5T480-532ZM212-172v-402l268-202 268 202v402H212Zm28-28h480v-360L480-740 240-560v360Zm240-270Z"/>
    </Icon>
  );
});

IconMaterialHelpClinicW100.displayName = 'OnesyIconMaterialHelpClinicW100';

export default IconMaterialHelpClinicW100;
