import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShieldWithHouseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHouseW100Filled'

      short_name='ShieldWithHouse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-612 253 197q-20 84-70.5 152T534-157v-177H426v177q-78-38-128.5-106T227-415l253-197Zm0-212 268 100v208q0 17-2 36.5t-4 36.5L480-647 218-443q-2-17-4-36.5t-2-36.5v-208l268-100Z"/>
    </Icon>
  );
});

IconMaterialShieldWithHouseW100Filled.displayName = 'OnesyIconMaterialShieldWithHouseW100Filled';

export default IconMaterialShieldWithHouseW100Filled;
