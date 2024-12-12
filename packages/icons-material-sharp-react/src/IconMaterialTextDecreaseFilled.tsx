import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextDecreaseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextDecreaseFilled'

      short_name='TextDecrease'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m40-200 210-560h100l210 560h-96l-51-143H187l-51 143H40Zm176-224h168l-82-232h-4l-82 232Zm384-16v-80h320v80H600Z"/>
    </Icon>
  );
});

IconMaterialTextDecreaseFilled.displayName = 'OnesyIconMaterialTextDecreaseFilled';

export default IconMaterialTextDecreaseFilled;
