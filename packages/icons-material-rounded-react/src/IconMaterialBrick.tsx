import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrick = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brick'

      short_name='Brick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-220v-360q0-25 17.5-42.5T140-640h60v-100q0-25 17.5-42.5T260-800h120q25 0 42.5 17.5T440-740v100h80v-100q0-25 17.5-42.5T580-800h120q25 0 42.5 17.5T760-740v100h60q25 0 42.5 17.5T880-580v360q0 25-17.5 42.5T820-160H140q-25 0-42.5-17.5T80-220Zm80-20h640v-320H160v320Zm120-400h80v-80h-80v80Zm320 0h80v-80h-80v80ZM160-240h640-640Zm120-400h80-80Zm320 0h80-80Z"/>
    </Icon>
  );
});

IconMaterialBrick.displayName = 'OnesyIconMaterialBrick';

export default IconMaterialBrick;
