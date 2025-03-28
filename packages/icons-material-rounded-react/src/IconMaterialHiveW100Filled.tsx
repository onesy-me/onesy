import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHiveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HiveW100Filled'

      short_name='Hive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M634-494h126l48-86q8-14 8-29t-8-29l-31-55q-8-14-21.5-22.5T725-724h-91l-64 115 64 115ZM417-365h126l64-115-64-115H417l-64 115 64 115Zm0-259h126l64-115-47-84q-8-14-21.5-22.5T508-854h-56q-17 0-30.5 8.5T400-823l-47 84 64 115Zm-27 15-64-115h-91q-17 0-30.5 8.5T183-693l-31 55q-8 14-8 29t8 29l48 86h126l64-115Zm0 258-64-115H200l-48 86q-8 14-8 29t8 29l31 55q8 14 21.5 22.5T235-236h91l64-115Zm27 15-64 115 47 84q8 14 21.5 22.5T452-106h56q17 0 30.5-8.5T560-137l47-84-64-115H417Zm217 100h91q17 0 30.5-8.5T777-267l31-55q8-14 8-29t-8-29l-48-86H634l-64 115 64 115Z"/>
    </Icon>
  );
});

IconMaterialHiveW100Filled.displayName = 'OnesyIconMaterialHiveW100Filled';

export default IconMaterialHiveW100Filled;
