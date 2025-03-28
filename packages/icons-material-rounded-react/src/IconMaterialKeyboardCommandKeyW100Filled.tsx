import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardCommandKeyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardCommandKeyW100Filled'

      short_name='KeyboardCommandKey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-146q-48 0-81-33t-33-81q0-48 33-81t81-33h86v-212h-86q-48 0-81-33t-33-81q0-48 33-81t81-33q48 0 81 33t33 81v86h212v-86q0-48 33-81t81-33q48 0 81 33t33 81q0 48-33 81t-81 33h-86v212h86q48 0 81 33t33 81q0 48-33 81t-81 33q-48 0-81-33t-33-81v-86H374v86q0 48-33 81t-81 33Zm0-28q35 0 60.5-25.5T346-260v-86h-86q-35 0-60.5 25.5T174-260q0 35 25.5 60.5T260-174Zm440 0q35 0 60.5-25.5T786-260q0-35-25.5-60.5T700-346h-86v86q0 35 25.5 60.5T700-174ZM374-374h212v-212H374v212ZM260-614h86v-86q0-35-25.5-60.5T260-786q-35 0-60.5 25.5T174-700q0 35 25.5 60.5T260-614Zm354 0h86q35 0 60.5-25.5T786-700q0-35-25.5-60.5T700-786q-35 0-60.5 25.5T614-700v86Z"/>
    </Icon>
  );
});

IconMaterialKeyboardCommandKeyW100Filled.displayName = 'OnesyIconMaterialKeyboardCommandKeyW100Filled';

export default IconMaterialKeyboardCommandKeyW100Filled;
