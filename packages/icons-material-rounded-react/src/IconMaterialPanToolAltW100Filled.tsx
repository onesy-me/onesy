import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanToolAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolAltW100Filled'

      short_name='PanToolAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M424-172q-20.96 0-39.98-9-19.02-9-33.37-26.29L132-470l18-15q8-7 19-6.5t20 5.5l143 86v-415q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v323h115v-214q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v214h115v-164q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v164h114v-94q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v280q0 56-39 95t-95 39H424Z"/>
    </Icon>
  );
});

IconMaterialPanToolAltW100Filled.displayName = 'OnesyIconMaterialPanToolAltW100Filled';

export default IconMaterialPanToolAltW100Filled;
