import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGiteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GiteFilled'

      short_name='Gite'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-200v-360l160-160h40v-80h80v80h360l160 160v360H80Zm560-80h160v-247l-80-80-80 80v247Zm-480 0h400v-200H160v200Z"/>
    </Icon>
  );
});

IconMaterialGiteFilled.displayName = 'OnesyIconMaterialGiteFilled';

export default IconMaterialGiteFilled;
