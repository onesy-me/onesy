import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextRotationAngledownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationAngledownW100'

      short_name='TextRotationAngledown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M430-146v-28h96L128-572l20-20 398 398v-96h28v144H430Zm159-238-22-21 51-110-133-133-110 51-21-22 394-176 20 19-179 392Zm-78-276 119 119 99-212-3-3-215 96Z"/>
    </Icon>
  );
});

IconMaterialTextRotationAngledownW100.displayName = 'OnesyIconMaterialTextRotationAngledownW100';

export default IconMaterialTextRotationAngledownW100;
