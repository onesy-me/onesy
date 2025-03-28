import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddBoxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBoxW100Filled'

      short_name='AddBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-466v146q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-146h146q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H494v-146q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v146H320q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h146ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialAddBoxW100Filled.displayName = 'OnesyIconMaterialAddBoxW100Filled';

export default IconMaterialAddBoxW100Filled;
