import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextRotationNoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationNoneW100'

      short_name='TextRotationNone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-226v-28h564l-68-68 20-20 102 102-102 102-20-20 68-68H186Zm127-192 154-404h28l150 404h-30l-42-114H385l-42 114h-30Zm82-140h168l-80-220h-4l-84 220Z"/>
    </Icon>
  );
});

IconMaterialTextRotationNoneW100.displayName = 'OnesyIconMaterialTextRotationNoneW100';

export default IconMaterialTextRotationNoneW100;
