import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchAccountW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccountW100Filled'

      short_name='SwitchAccount'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M559.88-496q39.12 0 66.62-27.38 27.5-27.38 27.5-66.5 0-39.12-27.38-66.62-27.38-27.5-66.5-27.5-39.12 0-66.62 27.38-27.5 27.38-27.5 66.5 0 39.12 27.38 66.62 27.38 27.5 66.5 27.5ZM292-292v-536h536v536H292ZM132-132v-536h28v508h508v28H132Zm218-188h420q-42-44-95.82-68-53.82-24-114-24T446-388q-54 24-96 68Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccountW100Filled.displayName = 'OnesyIconMaterialSwitchAccountW100Filled';

export default IconMaterialSwitchAccountW100Filled;
