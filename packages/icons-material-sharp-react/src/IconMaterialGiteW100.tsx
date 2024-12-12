import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGiteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GiteW100'

      short_name='Gite'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-252v-285l144-152h56v-59h28v59h324l144 152v285H132Zm456-28h212v-245L695-637 588-523v243Zm-428 0h400v-211H160v211Z"/>
    </Icon>
  );
});

IconMaterialGiteW100.displayName = 'OnesyIconMaterialGiteW100';

export default IconMaterialGiteW100;
