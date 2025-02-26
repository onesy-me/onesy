import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVignetteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VignetteFilled'

      short_name='Vignette'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm400-160q98 0 169-47.5T720-480q0-65-71-112.5T480-640q-98 0-169 47.5T240-480q0 65 71 112.5T480-320Z"/>
    </Icon>
  );
});

IconMaterialVignetteFilled.displayName = 'OnesyIconMaterialVignetteFilled';

export default IconMaterialVignetteFilled;
