import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPartyModeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PartyModeFilled'

      short_name='PartyMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l50-54q11-12 26.5-19t32.5-7h170q17 0 32.5 7t26.5 19l50 54h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm321-140q72 0 125.5-45.5T660-420q0-17-11.5-28.5T620-460q-17 0-28.5 11.5T580-420q0 35-27 57.5T490-340H377q-14 0-18 15t9 26q23 20 52.5 29.5T481-260ZM341-420q17 0 28.5-11.5T381-460q0-35 27-57.5t63-22.5h113q14 0 18-15t-9-26q-23-20-52.5-29.5T480-620q-72 0-125.5 45.5T301-460q0 17 11.5 28.5T341-420Z"/>
    </Icon>
  );
});

IconMaterialPartyModeFilled.displayName = 'OnesyIconMaterialPartyModeFilled';

export default IconMaterialPartyModeFilled;
