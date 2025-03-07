import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSurroundSoundW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SurroundSoundW100Filled'

      short_name='SurroundSound'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-396q35 0 59.5-24.5T564-480q0-35-24.5-59.5T480-564q-35 0-59.5 24.5T396-480q0 35 24.5 59.5T480-396Zm196 76q28-34 42-75t14-85q0-44-14-85t-42-75l-20 20q23 30 35.5 66t12.5 74q0 38-12.5 74T656-340l20 20Zm-392 0 20-20q-23-30-35.5-66T256-480q0-38 12.5-74t35.5-66l-20-20q-28 34-42 75t-14 85q0 44 14 85t42 75ZM132-212v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialSurroundSoundW100Filled.displayName = 'OnesyIconMaterialSurroundSoundW100Filled';

export default IconMaterialSurroundSoundW100Filled;
