import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextRotationDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationDown'

      short_name='TextRotationDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120 100-258l58-56 42 42v-528h80v528l42-42 56 56-138 138Zm160-156v-76l112-38v-178l-112-40v-76l440 164v80L400-276Zm176-138 182-64v-4l-182-64v132Z"/>
    </Icon>
  );
});

IconMaterialTextRotationDown.displayName = 'OnesyIconMaterialTextRotationDown';

export default IconMaterialTextRotationDown;
