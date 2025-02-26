import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVariablesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariablesW100'

      short_name='Variables'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-332v-296h616v296H172Zm28-28h560v-240H200v240Zm0 0v-240 240Z"/>
    </Icon>
  );
});

IconMaterialVariablesW100.displayName = 'OnesyIconMaterialVariablesW100';

export default IconMaterialVariablesW100;
