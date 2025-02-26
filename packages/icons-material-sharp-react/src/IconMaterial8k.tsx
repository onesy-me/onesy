import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial8k = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='8k'

      short_name='8k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-360h60v-90l70 90h73l-93-120 93-120h-73l-70 90v-90h-60v240Zm-260 0h180v-240H260v240Zm60-140v-60h60v60h-60Zm0 100v-60h60v60h-60ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterial8k.displayName = 'OnesyIconMaterial8k';

export default IconMaterial8k;
