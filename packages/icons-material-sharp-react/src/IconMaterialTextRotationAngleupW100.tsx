import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextRotationAngleupW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationAngleupW100'

      short_name='TextRotationAngleup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m386-156-20-20 398-398h-96v-28h144v144h-28v-96L386-156Zm-46-225L164-775l19-20 392 179-21 22-110-51-133 133 51 110-22 21Zm-41-157 119-119-212-99-3 3 96 215Z"/>
    </Icon>
  );
});

IconMaterialTextRotationAngleupW100.displayName = 'OnesyIconMaterialTextRotationAngleupW100';

export default IconMaterialTextRotationAngleupW100;
