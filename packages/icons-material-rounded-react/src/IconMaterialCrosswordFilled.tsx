import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrosswordFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CrosswordFilled'

      short_name='Crossword'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-260v120q0 25 17.5 42.5T420-80h120q25 0 42.5-17.5T600-140v-120q0-25-17.5-42.5T540-320H420q-25 0-42.5 17.5T360-260Zm-40-160v-120q0-25-17.5-42.5T260-600H140q-25 0-42.5 17.5T80-540v120q0 25 17.5 42.5T140-360h120q25 0 42.5-17.5T320-420Zm100 60h120q25 0 42.5-17.5T600-420v-120q0-25-17.5-42.5T540-600H420q-25 0-42.5 17.5T360-540v120q0 25 17.5 42.5T420-360Zm280 0h120q25 0 42.5-17.5T880-420v-120q0-25-17.5-42.5T820-600H700q-25 0-42.5 17.5T640-540v120q0 25 17.5 42.5T700-360Zm0-280h120q25 0 42.5-17.5T880-700v-120q0-25-17.5-42.5T820-880H700q-25 0-42.5 17.5T640-820v120q0 25 17.5 42.5T700-640Z"/>
    </Icon>
  );
});

IconMaterialCrosswordFilled.displayName = 'OnesyIconMaterialCrosswordFilled';

export default IconMaterialCrosswordFilled;
