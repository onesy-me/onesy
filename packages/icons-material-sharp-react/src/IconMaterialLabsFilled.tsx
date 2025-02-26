import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabsFilled'

      short_name='Labs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-141.5-58.5T280-280v-360h-80v-240h560v240h-80v360q0 83-58.5 141.5T480-80Zm0-80q50 0 85-35t35-85H480v-80h120v-80H480v-80h120v-120H360v360q0 50 35 85t85 35Z"/>
    </Icon>
  );
});

IconMaterialLabsFilled.displayName = 'OnesyIconMaterialLabsFilled';

export default IconMaterialLabsFilled;
