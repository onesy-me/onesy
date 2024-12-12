import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClimateMiniSplitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClimateMiniSplitFilled'

      short_name='ClimateMiniSplit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-480v-400h800v400H720v-240H240v240H80Zm200 80h80q0 83-58.5 141.5T160-200v-80q50 0 85-35t35-85Zm40-80v-160h320v160H320Zm120 320v-240h80v240h-80Zm160-240h80q0 50 35 85t85 35v80q-83 0-141.5-58.5T600-400Z"/>
    </Icon>
  );
});

IconMaterialClimateMiniSplitFilled.displayName = 'OnesyIconMaterialClimateMiniSplitFilled';

export default IconMaterialClimateMiniSplitFilled;
