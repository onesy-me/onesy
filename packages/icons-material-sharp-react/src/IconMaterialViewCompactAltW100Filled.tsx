import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewCompactAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactAltW100Filled'

      short_name='ViewCompactAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M339-339h108v-108H339v108Zm0-174h108v-108H339v108Zm174 174h108v-108H513v108Zm0-174h108v-108H513v108ZM132-212v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialViewCompactAltW100Filled.displayName = 'OnesyIconMaterialViewCompactAltW100Filled';

export default IconMaterialViewCompactAltW100Filled;
