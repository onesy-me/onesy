import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewComfyAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewComfyAltW100Filled'

      short_name='ViewComfyAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-560v-268h268v268H132Zm0 428v-268h268v268H132Zm428-428v-268h268v268H560Zm0 428v-268h268v268H560Z"/>
    </Icon>
  );
});

IconMaterialViewComfyAltW100Filled.displayName = 'OnesyIconMaterialViewComfyAltW100Filled';

export default IconMaterialViewComfyAltW100Filled;
