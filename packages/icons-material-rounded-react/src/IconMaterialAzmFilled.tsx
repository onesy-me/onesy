import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAzmFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AzmFilled'

      short_name='Azm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-600v272q0 14 12 19t22-5l103-103q11-11 17-25.5t6-30.5v-247q0-33-23.5-56.5T720-800H473q-16 0-30.5 6T417-777L314-674q-10 10-5 22t19 12h272q17 0 28.5 11.5T640-600ZM400-360v272q0 14 12 19t22-5l103-103q11-11 17-25.5t6-30.5v-247q0-33-23.5-56.5T480-560H233q-16 0-30.5 6T177-537L74-434q-10 10-5 22t19 12h272q17 0 28.5 11.5T400-360Z"/>
    </Icon>
  );
});

IconMaterialAzmFilled.displayName = 'OnesyIconMaterialAzmFilled';

export default IconMaterialAzmFilled;
