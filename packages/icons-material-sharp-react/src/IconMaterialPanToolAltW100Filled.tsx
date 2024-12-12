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
      <path d="M380-172 132-470l35-29 165 99v-429h28v337h115v-228h28v228h115v-178h28v178h114v-108h28v428H380Z"/>
    </Icon>
  );
});

IconMaterialPanToolAltW100Filled.displayName = 'OnesyIconMaterialPanToolAltW100Filled';

export default IconMaterialPanToolAltW100Filled;
