import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial1kFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kFilled'

      short_name='1k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-360h60v-90l70 90h70l-90-120 90-120h-70l-70 90v-90h-60v240Zm-140 0h60v-240H280v60h60v180ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterial1kFilled.displayName = 'OnesyIconMaterial1kFilled';

export default IconMaterial1kFilled;
