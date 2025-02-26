import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoW100'

      short_name='Photo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M318-306h332L548-442 448-318l-64-74-66 86ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialPhotoW100.displayName = 'OnesyIconMaterialPhotoW100';

export default IconMaterialPhotoW100;
