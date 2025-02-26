import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDvrW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DvrW100Filled'

      short_name='Dvr'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-420q8.5 0 14.25-5.75T300-440q0-8.5-5.75-14.25T280-460q-8.5 0-14.25 5.75T260-440q0 8.5 5.75 14.25T280-420Zm0-160q8.5 0 14.25-5.75T300-600q0-8.5-5.75-14.25T280-620q-8.5 0-14.25 5.75T260-600q0 8.5 5.75 14.25T280-580Zm100 154h300q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H380q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm0-160h300q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H380q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4ZM192-252q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H588v50q0 12.75-8.62 21.37Q570.75-172 558-172H402q-12.75 0-21.37-8.63Q372-189.25 372-202v-50H192Z"/>
    </Icon>
  );
});

IconMaterialDvrW100Filled.displayName = 'OnesyIconMaterialDvrW100Filled';

export default IconMaterialDvrW100Filled;
