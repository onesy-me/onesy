import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettopComponentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettopComponentW100Filled'

      short_name='SettopComponent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-332q-24.75 0-42.37-17.63Q132-367.25 132-392v-176q0-24.75 17.63-42.38Q167.25-628 192-628h576q24.75 0 42.38 17.62Q828-592.75 828-568v176q0 24.75-17.62 42.37Q792.75-332 768-332H192Zm48-134h156q5.95 0 9.98-4.04 4.02-4.03 4.02-10 0-5.96-4.02-9.96-4.03-4-9.98-4H240q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm320.18 16q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5Zm120 0q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5Z"/>
    </Icon>
  );
});

IconMaterialSettopComponentW100Filled.displayName = 'OnesyIconMaterialSettopComponentW100Filled';

export default IconMaterialSettopComponentW100Filled;
