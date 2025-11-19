import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitSceneUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitSceneUpW100'

      short_name='SplitSceneUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-132v-234h28v206h480v-206h28v234H212Zm-80-334v-28h80v-334h536v334h80v28H132Zm588 306H240h480Z"/>
    </Icon>
  );
});

IconMaterialSplitSceneUpW100.displayName = 'OnesyIconMaterialSplitSceneUpW100';

export default IconMaterialSplitSceneUpW100;
