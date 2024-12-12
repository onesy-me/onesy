import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewComfyAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewComfyAltW100'

      short_name='ViewComfyAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-560v-268h268v268H132Zm28-28h212v-212H160v212Zm-28 456v-268h268v268H132Zm28-28h212v-212H160v212Zm400-400v-268h268v268H560Zm28-28h212v-212H588v212Zm-28 456v-268h268v268H560Zm28-28h212v-212H588v212ZM372-588Zm0 216Zm216-216Zm0 216Z"/>
    </Icon>
  );
});

IconMaterialViewComfyAltW100.displayName = 'OnesyIconMaterialViewComfyAltW100';

export default IconMaterialViewComfyAltW100;
