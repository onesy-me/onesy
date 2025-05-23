import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRollerShades = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RollerShades'

      short_name='RollerShades'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200v-560q0-33 23.5-56.5T240-840h480q33 0 56.5 23.5T800-760v560h40q17 0 28.5 11.5T880-160q0 17-11.5 28.5T840-120H120q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200h40Zm80-320h480v-240H240v240Zm0 320h480v-240H520v72q14 10 22 25t8 33q0 29-20.5 49.5T480-240q-29 0-49.5-20.5T410-310q0-18 8-32.5t22-24.5v-73H240v240Zm0-560h480-480Z"/>
    </Icon>
  );
});

IconMaterialRollerShades.displayName = 'OnesyIconMaterialRollerShades';

export default IconMaterialRollerShades;
