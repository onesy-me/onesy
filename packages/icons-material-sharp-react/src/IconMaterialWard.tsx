import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Ward'

      short_name='Ward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-800H80v-80h160v800h-80v-720ZM280-80v-800h520v800H280Zm80-459q18-11 38-16t42-5h200q22 0 42 5t38 16v-261H360v261Zm180-61q-33 0-56.5-23.5T460-680q0-33 23.5-56.5T540-760q33 0 56.5 23.5T620-680q0 33-23.5 56.5T540-600ZM360-160h360v-240q0-33-23.5-56.5T640-480H440q-33 0-56.5 23.5T360-400v240Zm140-40h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Zm-140 40h360-360Z"/>
    </Icon>
  );
});

IconMaterialWard.displayName = 'OnesyIconMaterialWard';

export default IconMaterialWard;
