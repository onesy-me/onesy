import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHelpClinicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HelpClinicW100Filled'

      short_name='HelpClinic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-296h28v-148h-28v148Zm14-236q11 0 19.5-8.5T508-560q0-11-8.5-19.5T480-588q-11 0-19.5 8.5T452-560q0 11 8.5 19.5T480-532ZM212-172v-402l268-202 268 202v402H212Z"/>
    </Icon>
  );
});

IconMaterialHelpClinicW100Filled.displayName = 'OnesyIconMaterialHelpClinicW100Filled';

export default IconMaterialHelpClinicW100Filled;
