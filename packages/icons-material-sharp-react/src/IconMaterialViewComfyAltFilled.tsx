import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewComfyAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewComfyAltFilled'

      short_name='ViewComfyAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-560v-320h320v320H80Zm0 480v-320h320v320H80Zm480-480v-320h320v320H560Zm0 480v-320h320v320H560Z"/>
    </Icon>
  );
});

IconMaterialViewComfyAltFilled.displayName = 'OnesyIconMaterialViewComfyAltFilled';

export default IconMaterialViewComfyAltFilled;
