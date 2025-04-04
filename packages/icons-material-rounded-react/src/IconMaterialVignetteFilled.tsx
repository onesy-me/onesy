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
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-160q98 0 169-47.5T720-480q0-65-71-112.5T480-640q-98 0-169 47.5T240-480q0 65 71 112.5T480-320Z"/>
    </Icon>
  );
});

IconMaterialVignetteFilled.displayName = 'OnesyIconMaterialVignetteFilled';

export default IconMaterialVignetteFilled;
