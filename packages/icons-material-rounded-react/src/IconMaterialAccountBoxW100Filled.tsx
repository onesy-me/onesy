import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountBoxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBoxW100Filled'

      short_name='AccountBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-436q48 0 81-33t33-81q0-48-33-81t-81-33q-48 0-81 33t-33 81q0 48 33 81t81 33ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm-10-28h516q11-6 15-11.5t7-14.5q-54-53-125.5-83.5T480-340q-83 0-154.5 30.5T200-226q3 9 7 14.5t15 11.5Z"/>
    </Icon>
  );
});

IconMaterialAccountBoxW100Filled.displayName = 'OnesyIconMaterialAccountBoxW100Filled';

export default IconMaterialAccountBoxW100Filled;
