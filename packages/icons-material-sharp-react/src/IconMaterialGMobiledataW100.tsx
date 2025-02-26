import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGMobiledataW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GMobiledataW100'

      short_name='GMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-300v-360h292v28H334v304h252v-138H486v-28h128v194H306Z"/>
    </Icon>
  );
});

IconMaterialGMobiledataW100.displayName = 'OnesyIconMaterialGMobiledataW100';

export default IconMaterialGMobiledataW100;
