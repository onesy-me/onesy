import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCardTravelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardTravelW100Filled'

      short_name='CardTravel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-496h200v-120h296v120h200v496H132Zm228-496h240v-92H360v92ZM160-302h640v-76H160v76Z"/>
    </Icon>
  );
});

IconMaterialCardTravelW100Filled.displayName = 'OnesyIconMaterialCardTravelW100Filled';

export default IconMaterialCardTravelW100Filled;
