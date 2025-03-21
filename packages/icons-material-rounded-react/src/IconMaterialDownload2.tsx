import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDownload2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Download2'

      short_name='Download2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-80q-17 0-28.5-11.5T160-120q0-17 11.5-28.5T200-160h560q17 0 28.5 11.5T800-120q0 17-11.5 28.5T760-80H200Zm280-185q-9 0-17.5-4T448-281L250-535q-15-20-4-42.5t36-22.5h78v-240q0-17 11.5-28.5T400-880h160q17 0 28.5 11.5T600-840v240h78q25 0 36 22.5t-4 42.5L512-281q-6 8-14.5 12t-17.5 4Zm0-105 116-150h-76v-280h-80v280h-76l116 150Zm0-150Z"/>
    </Icon>
  );
});

IconMaterialDownload2.displayName = 'OnesyIconMaterialDownload2';

export default IconMaterialDownload2;
