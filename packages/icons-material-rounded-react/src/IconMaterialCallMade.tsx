import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallMade = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMade'

      short_name='CallMade'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-624 244-188q-11 11-28 11t-28-11q-11-11-11-28t11-28l436-436H400q-17 0-28.5-11.5T360-720q0-17 11.5-28.5T400-760h320q17 0 28.5 11.5T760-720v320q0 17-11.5 28.5T720-360q-17 0-28.5-11.5T680-400v-224Z"/>
    </Icon>
  );
});

IconMaterialCallMade.displayName = 'OnesyIconMaterialCallMade';

export default IconMaterialCallMade;
