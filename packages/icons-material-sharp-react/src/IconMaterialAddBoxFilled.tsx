import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddBoxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBoxFilled'

      short_name='AddBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialAddBoxFilled.displayName = 'OnesyIconMaterialAddBoxFilled';

export default IconMaterialAddBoxFilled;
