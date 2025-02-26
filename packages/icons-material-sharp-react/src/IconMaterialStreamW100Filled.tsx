import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStreamW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StreamW100Filled'

      short_name='Stream'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-426q-23 0-38.5-15.5T106-480q0-23 15.5-38.5T160-534q23 0 38.5 15.5T214-480q0 23-15.5 38.5T160-426Zm66 218-20-20 138-138 20 20-138 138Zm120-388L208-734l20-20 138 138-20 20Zm134 490q-23 0-38.5-15.5T426-160q0-23 15.5-38.5T480-214q23 0 38.5 15.5T534-160q0 23-15.5 38.5T480-106Zm0-640q-23 0-38.5-15.5T426-800q0-23 15.5-38.5T480-854q23 0 38.5 15.5T534-800q0 23-15.5 38.5T480-746Zm134 150-20-20 140-138 20 20-140 138Zm120 388L596-346l20-20 138 138-20 20Zm66-218q-23 0-38.5-15.5T746-480q0-23 15.5-38.5T800-534q23 0 38.5 15.5T854-480q0 23-15.5 38.5T800-426Z"/>
    </Icon>
  );
});

IconMaterialStreamW100Filled.displayName = 'OnesyIconMaterialStreamW100Filled';

export default IconMaterialStreamW100Filled;
