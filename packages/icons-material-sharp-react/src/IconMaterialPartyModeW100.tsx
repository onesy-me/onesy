import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPartyModeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PartyModeW100'

      short_name='PartyMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-536h176l74-80h196l74 80h176v536H132Zm28-28h640v-480H640l-74-80H394l-74 80H160v480Zm320-240Zm0 140q59 0 99.5-40.5T620-440v-10q0-5-2-10h-28q2 5 2 10v10q0 47-32.5 79.5T480-328h-80q11 11 32.5 19.5T480-300ZM342-420h28q-2-5-2-10v-10q0-47 32.5-79.5T480-552h80q-15-12-34-20t-46-8q-59 0-99.5 40.5T340-440v10q0 5 2 10Z"/>
    </Icon>
  );
});

IconMaterialPartyModeW100.displayName = 'OnesyIconMaterialPartyModeW100';

export default IconMaterialPartyModeW100;
