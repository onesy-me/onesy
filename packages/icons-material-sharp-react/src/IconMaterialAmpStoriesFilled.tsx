import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAmpStoriesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmpStoriesFilled'

      short_name='AmpStories'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-160v-640h400v640H280Zm-160-80v-480h80v480h-80Zm640 0v-480h80v480h-80Z"/>
    </Icon>
  );
});

IconMaterialAmpStoriesFilled.displayName = 'OnesyIconMaterialAmpStoriesFilled';

export default IconMaterialAmpStoriesFilled;
