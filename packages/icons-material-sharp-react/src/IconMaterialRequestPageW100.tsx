import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRequestPageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestPageW100'

      short_name='RequestPage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-266h28v-40h80v-148H414v-92h160v-28h-80v-40h-28v40h-80v148h160v92H386v28h80v40ZM212-132v-696h326l210 210v486H212Zm28-28h480v-446L526-800H240v640Zm0 0v-640 640Z"/>
    </Icon>
  );
});

IconMaterialRequestPageW100.displayName = 'OnesyIconMaterialRequestPageW100';

export default IconMaterialRequestPageW100;
