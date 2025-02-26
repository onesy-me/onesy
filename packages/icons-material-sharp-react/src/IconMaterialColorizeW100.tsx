import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialColorizeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ColorizeW100'

      short_name='Colorize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-118l349-349-77-76 20-20 98 97 159-160 76 78-160 160 98 99-20 20-78-78-347 347H172Zm28-28h80l339-341-78-78-341 339v80Zm419-382 138-138-37-37-138 139 37 36Zm0 0-37-36 37 36Z"/>
    </Icon>
  );
});

IconMaterialColorizeW100.displayName = 'OnesyIconMaterialColorizeW100';

export default IconMaterialColorizeW100;
