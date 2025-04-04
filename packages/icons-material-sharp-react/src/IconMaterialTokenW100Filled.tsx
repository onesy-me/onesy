import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTokenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TokenW100Filled'

      short_name='Token'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M369-558 161-673l319-177 319 177-208 115q-20-26-49-41t-62-15q-33 0-62 15t-49 41Zm97 440L146-295v-355l210 118q-5 13-7.5 25.5T346-480q0 51 34.5 89t85.5 46v227Zm14-256q-45 0-75.5-30.5T374-480q0-45 30.5-75.5T480-586q45 0 75.5 30.5T586-480q0 45-30.5 75.5T480-374Zm14 256v-227q51-8 85.5-46t34.5-89q0-14-2.5-26.5T604-532l210-118v355L494-118Z"/>
    </Icon>
  );
});

IconMaterialTokenW100Filled.displayName = 'OnesyIconMaterialTokenW100Filled';

export default IconMaterialTokenW100Filled;
