import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrowseActivityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseActivityW100'

      short_name='BrowseActivity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-550v-214h696v214h-28v-186H160v186h-28Zm0 282v-254h28v226h640v-226h28v254H132Zm0-254v-28h197l74 148 147-266h20l59 118h199v28H612l-54-106-149 266h-18l-80-160H132ZM80-200v-28h800v28H80Zm400-316Z"/>
    </Icon>
  );
});

IconMaterialBrowseActivityW100.displayName = 'OnesyIconMaterialBrowseActivityW100';

export default IconMaterialBrowseActivityW100;
