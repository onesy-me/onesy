import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShieldWithHouseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHouseW100'

      short_name='ShieldWithHouse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-134q-115-36-191.5-142T212-516v-208l268-100 268 100v208q0 134-76.5 240T480-134Zm0-478L249-432q18 79 64.5 144T426-187v-147h108v147q66-36 112.5-101T711-432L480-612Zm0-182-240 89v189q0 12 1 26.5t3 26.5l236-184 236 184q2-12 3-26.5t1-26.5v-189l-240-89Z"/>
    </Icon>
  );
});

IconMaterialShieldWithHouseW100.displayName = 'OnesyIconMaterialShieldWithHouseW100';

export default IconMaterialShieldWithHouseW100;
