import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVolcanoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolcanoW100Filled'

      short_name='Volcano'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m160-132 114-256h121l80-200h206l130 456H160Zm406-614v-108h28v108h-28Zm155 64-19-19 76-76 20 19-77 76Zm-282 0-76-76 19-20 76 77-19 19Z"/>
    </Icon>
  );
});

IconMaterialVolcanoW100Filled.displayName = 'OnesyIconMaterialVolcanoW100Filled';

export default IconMaterialVolcanoW100Filled;
