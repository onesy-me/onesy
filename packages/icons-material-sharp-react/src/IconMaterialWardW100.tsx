import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WardW100'

      short_name='Ward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M218-800h-80v-28h108v696h-28v-668Zm108 668v-696h416v696H326Zm28-341q15-17 35.5-26t44.5-9h200q24 0 44.5 9t35.5 26v-327H354v327Zm180-127q-23 0-38.5-15.5T480-654q0-23 15.5-38.5T534-708q23 0 38.5 15.5T588-654q0 23-15.5 38.5T534-600ZM354-160h360v-240q0-33-23.5-56.5T634-480H434q-33 0-56.5 23.5T354-400v240Zm166-66h28v-80h80v-28h-80v-80h-28v80h-80v28h80v80Zm-166 66h360-360Z"/>
    </Icon>
  );
});

IconMaterialWardW100.displayName = 'OnesyIconMaterialWardW100';

export default IconMaterialWardW100;
