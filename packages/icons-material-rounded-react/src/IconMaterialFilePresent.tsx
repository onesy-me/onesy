import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilePresent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilePresent'

      short_name='FilePresent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-200q67 0 113.5-47T640-360v-120q0-17-11.5-28.5T600-520q-17 0-28.5 11.5T560-480v120q0 33-23 56.5T480-280q-33 0-56.5-23.5T400-360v-220q0-9 6-14.5t14-5.5q9 0 14.5 5.5T440-580v180q0 17 11.5 28.5T480-360q17 0 28.5-11.5T520-400v-180q0-42-29-71t-71-29q-42 0-71 29t-29 71v220q0 66 47 113t113 47ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 200v520q0 33-23.5 56.5T720-80H240Zm0-80h480v-480H600q-17 0-28.5-11.5T560-680v-120H240v640Zm0-640v160-160 640-640Z"/>
    </Icon>
  );
});

IconMaterialFilePresent.displayName = 'OnesyIconMaterialFilePresent';

export default IconMaterialFilePresent;
