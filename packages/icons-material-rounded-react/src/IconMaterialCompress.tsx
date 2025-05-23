import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCompress = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Compress'

      short_name='Compress'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-400q-17 0-28.5-11.5T160-440q0-17 11.5-28.5T200-480h560q17 0 28.5 11.5T800-440q0 17-11.5 28.5T760-400H200Zm0-120q-17 0-28.5-11.5T160-560q0-17 11.5-28.5T200-600h560q17 0 28.5 11.5T800-560q0 17-11.5 28.5T760-520H200ZM480-80q-17 0-28.5-11.5T440-120v-88l-36 36q-11 11-28 11t-28-11q-11-11-11-28t11-28l104-104q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l104 104q11 11 11.5 27.5T612-172q-11 11-27.5 11.5T556-171l-36-35v86q0 17-11.5 28.5T480-80Zm0-577q-8 0-15-2.5t-13-8.5L348-772q-11-11-11-28t11-28q11-11 28-11t28 11l36 36v-88q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v88l36-36q11-11 28-11t28 11q11 11 11 28t-11 28L508-668q-6 6-13 8.5t-15 2.5Z"/>
    </Icon>
  );
});

IconMaterialCompress.displayName = 'OnesyIconMaterialCompress';

export default IconMaterialCompress;
