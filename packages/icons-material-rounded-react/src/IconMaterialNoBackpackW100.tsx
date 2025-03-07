import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoBackpackW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoBackpackW100'

      short_name='NoBackpack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M598-828q12.75 0 21.38 8.62Q628-810.75 628-798v51q48 5 84 39.5t36 88.5v267q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-267q0-41.66-31.14-71.33T614-720H360q-12 0-20-8t-8-20v-50q0-12.75 8.63-21.38Q349.25-828 362-828h8q12.75 0 21.38 8.62Q400-810.75 400-798v50h160v-50q0-12.75 8.63-21.38Q577.25-828 590-828h8Zm-84 382 28 28H334q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h180Zm16-84Zm-56 84ZM243-701l20 20q-11 11-17 28.5t-6 33.5v430q0 12 9 20.5t23 8.5h416q14 0 23-8.5t9-20.5v-51l28 28v23q0 23-17.62 40-17.63 17-42.38 17H272q-24.75 0-42.37-17Q212-166 212-189v-430q0-22 8-43.5t23-38.5Zm541 565L136-784q-4-4-4.5-9.5t4.28-10.5q5.22-5 10.22-5 5 0 10 5l648 648q4 4 4.5 9.5t-4.72 10.72Q799-131 794-131q-5 0-10-5Z"/>
    </Icon>
  );
});

IconMaterialNoBackpackW100.displayName = 'OnesyIconMaterialNoBackpackW100';

export default IconMaterialNoBackpackW100;
