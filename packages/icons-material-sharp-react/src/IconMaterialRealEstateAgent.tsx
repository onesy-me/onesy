import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRealEstateAgent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RealEstateAgent'

      short_name='RealEstateAgent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m560-60-280-78v58H40v-440h318l322 120v80h200v160L560-60ZM120-160h80v-280h-80v280Zm438 16 238-74v-22H513l-125-42 24-76 117 38h71v-26l-256-94h-64v220l278 76Zm202-256v-260L560-800 360-660v60h-80v-100l280-200 280 200v300h-80ZM560-800Zm20 160h40v-40h-40v40Zm-80 0h40v-40h-40v40Zm80 80h40v-40h-40v40Zm-80 0h40v-40h-40v40Z"/>
    </Icon>
  );
});

IconMaterialRealEstateAgent.displayName = 'OnesyIconMaterialRealEstateAgent';

export default IconMaterialRealEstateAgent;
