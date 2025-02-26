import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRectangleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RectangleW100'

      short_name='Rectangle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-25 0-42.5-17.5T132-272v-416q0-25 17.5-42.5T192-748h576q25 0 42.5 17.5T828-688v416q0 25-17.5 42.5T768-212H192Zm0-28h576q14 0 23-9t9-23v-416q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialRectangleW100.displayName = 'OnesyIconMaterialRectangleW100';

export default IconMaterialRectangleW100;
