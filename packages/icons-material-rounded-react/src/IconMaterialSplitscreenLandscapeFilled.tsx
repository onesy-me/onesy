import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitscreenLandscapeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenLandscapeFilled'

      short_name='SplitscreenLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-320h120q17 0 28.5-11.5T720-360v-240q0-17-11.5-28.5T680-640H560q-17 0-28.5 11.5T520-600v240q0 17 11.5 28.5T560-320Zm-280 0h120q17 0 28.5-11.5T440-360v-240q0-17-11.5-28.5T400-640H280q-17 0-28.5 11.5T240-600v240q0 17 11.5 28.5T280-320ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenLandscapeFilled.displayName = 'OnesyIconMaterialSplitscreenLandscapeFilled';

export default IconMaterialSplitscreenLandscapeFilled;
