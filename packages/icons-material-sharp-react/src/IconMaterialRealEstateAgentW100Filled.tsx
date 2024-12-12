import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRealEstateAgentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RealEstateAgentW100Filled'

      short_name='RealEstateAgent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-359 308-524h-28v-135l254-181 254 181v300h-28ZM559-617h30v-30h-30v30Zm-80 0h30v-30h-30v30Zm80 80h30v-30h-30v30Zm-80 0h30v-30h-30v30ZM112-132v-292h108v292H112Zm448 42-312-92v-242h100l286 105v59H526l-114-40-12 28 124 40h304v58L560-90Z"/>
    </Icon>
  );
});

IconMaterialRealEstateAgentW100Filled.displayName = 'OnesyIconMaterialRealEstateAgentW100Filled';

export default IconMaterialRealEstateAgentW100Filled;
