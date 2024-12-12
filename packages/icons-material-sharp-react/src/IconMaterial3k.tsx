import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial3k = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3k'

      short_name='3k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-360h60v-90l70 90h73l-93-120 93-120h-73l-70 90v-90h-60v240Zm-260 0h180v-240H260v60h120v40h-80v40h80v40H260v60ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterial3k.displayName = 'OnesyIconMaterial3k';

export default IconMaterial3k;
