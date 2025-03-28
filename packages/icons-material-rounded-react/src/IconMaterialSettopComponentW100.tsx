import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettopComponentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettopComponentW100'

      short_name='SettopComponent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-332q-24.75 0-42.37-17.63Q132-367.25 132-392v-176q0-24.75 17.63-42.38Q167.25-628 192-628h576q24.75 0 42.38 17.62Q828-592.75 828-568v176q0 24.75-17.62 42.37Q792.75-332 768-332H192Zm0-28h576q14 0 23-9t9-23v-176q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v176q0 14 9 23t23 9Zm48-106h156q5.95 0 9.98-4.04 4.02-4.03 4.02-10 0-5.96-4.02-9.96-4.03-4-9.98-4H240q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm320.18 16q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5Zm120 0q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5ZM160-360v-240 240Z"/>
    </Icon>
  );
});

IconMaterialSettopComponentW100.displayName = 'OnesyIconMaterialSettopComponentW100';

export default IconMaterialSettopComponentW100;
