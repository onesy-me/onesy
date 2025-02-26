import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCodeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeFilled'

      short_name='Code'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/>
    </Icon>
  );
});

IconMaterialCodeFilled.displayName = 'OnesyIconMaterialCodeFilled';

export default IconMaterialCodeFilled;
