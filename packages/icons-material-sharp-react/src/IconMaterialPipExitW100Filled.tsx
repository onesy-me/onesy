import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPipExitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PipExitW100Filled'

      short_name='PipExit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-296h320v-240h376v536H132Zm561-114 20-20-187-186h141v-28H479v188h28v-140l186 186ZM132-608v-140h220v140H132Z"/>
    </Icon>
  );
});

IconMaterialPipExitW100Filled.displayName = 'OnesyIconMaterialPipExitW100Filled';

export default IconMaterialPipExitW100Filled;
