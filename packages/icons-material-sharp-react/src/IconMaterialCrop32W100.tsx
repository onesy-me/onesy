import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrop32W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop32W100'

      short_name='Crop32'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-292v-376h616v376H172Zm28-28h560v-320H200v320Zm0 0v-320 320Z"/>
    </Icon>
  );
});

IconMaterialCrop32W100.displayName = 'OnesyIconMaterialCrop32W100';

export default IconMaterialCrop32W100;
