import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMms = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Mms'

      short_name='Mms'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-400h480L570-600 450-440l-90-120-120 160ZM80-80v-800h800v640H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialMms.displayName = 'OnesyIconMaterialMms';

export default IconMaterialMms;
