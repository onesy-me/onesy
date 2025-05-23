import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBook4 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book4'

      short_name='Book4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80q-50 0-85-35t-35-85v-560q0-50 35-85t85-35h440v640H240q-17 0-28.5 11.5T200-200q0 17 11.5 28.5T240-160h520v-640h80v720H240Zm120-240h240v-480H360v480Zm-80 0v-480h-40q-17 0-28.5 11.5T200-760v447q10-3 19.5-5t20.5-2h40Zm-80-480v487-487Z"/>
    </Icon>
  );
});

IconMaterialBook4.displayName = 'OnesyIconMaterialBook4';

export default IconMaterialBook4;
