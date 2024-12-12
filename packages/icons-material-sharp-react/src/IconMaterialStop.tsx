import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStop = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stop'

      short_name='Stop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-640v320-320Zm-80 400v-480h480v480H240Zm80-80h320v-320H320v320Z"/>
    </Icon>
  );
});

IconMaterialStop.displayName = 'OnesyIconMaterialStop';

export default IconMaterialStop;
