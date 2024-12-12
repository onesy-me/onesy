import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEscalatorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EscalatorW100Filled'

      short_name='Escalator'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-286h122l200-360h106v-28H572L372-314H266v28Zm-94 114v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialEscalatorW100Filled.displayName = 'OnesyIconMaterialEscalatorW100Filled';

export default IconMaterialEscalatorW100Filled;
