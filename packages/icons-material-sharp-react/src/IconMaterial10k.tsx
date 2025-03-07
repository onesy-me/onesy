import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial10k = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='10k'

      short_name='10k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-360h60v-240H200v60h40v180Zm100 0h180v-240H340v240Zm60-60v-120h60v120h-60Zm157 60h60v-90l70 90h73l-93-120 93-120h-73l-70 90v-90h-60v240ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterial10k.displayName = 'OnesyIconMaterial10k';

export default IconMaterial10k;
