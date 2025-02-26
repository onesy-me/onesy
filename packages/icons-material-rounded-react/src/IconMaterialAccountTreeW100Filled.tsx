import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountTreeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountTreeW100Filled'

      short_name='AccountTree'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M626-176v-90H526q-25 0-42.5-17.5T466-326v-340H334v90q0 13-8.5 21.5T304-546H136q-13 0-21.5-8.5T106-576v-208q0-13 8.5-21.5T136-814h168q13 0 21.5 8.5T334-784v90h292v-90q0-13 8.5-21.5T656-814h168q13 0 21.5 8.5T854-784v208q0 13-8.5 21.5T824-546H656q-13 0-21.5-8.5T626-576v-90H494v340q0 14 9 23t23 9h100v-90q0-13 8.5-21.5T656-414h168q13 0 21.5 8.5T854-384v208q0 13-8.5 21.5T824-146H656q-13 0-21.5-8.5T626-176Z"/>
    </Icon>
  );
});

IconMaterialAccountTreeW100Filled.displayName = 'OnesyIconMaterialAccountTreeW100Filled';

export default IconMaterialAccountTreeW100Filled;
