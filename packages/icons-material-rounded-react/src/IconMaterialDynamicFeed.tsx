import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDynamicFeed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFeed'

      short_name='DynamicFeed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-33 0-56.5-23.5T80-200v-240q0-17 11.5-28.5T120-480q17 0 28.5 11.5T160-440v240h320q17 0 28.5 11.5T520-160q0 17-11.5 28.5T480-120H160Zm160-160q-33 0-56.5-23.5T240-360v-240q0-17 11.5-28.5T280-640q17 0 28.5 11.5T320-600v240h320q17 0 28.5 11.5T680-320q0 17-11.5 28.5T640-280H320Zm160-160q-33 0-56.5-23.5T400-520v-240q0-33 23.5-56.5T480-840h320q33 0 56.5 23.5T880-760v240q0 33-23.5 56.5T800-440H480Zm0-80h320v-160H480v160Z"/>
    </Icon>
  );
});

IconMaterialDynamicFeed.displayName = 'OnesyIconMaterialDynamicFeed';

export default IconMaterialDynamicFeed;
