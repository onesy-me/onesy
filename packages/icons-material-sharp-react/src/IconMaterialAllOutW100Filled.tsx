import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAllOutW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllOutW100Filled'

      short_name='AllOut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-122h28v94h94v28H172Zm494 0v-28h94v-94h28v122H666Zm-186-80q-95 0-161.5-66.5T252-480q0-95 66.5-161.5T480-708q95 0 161.5 66.5T708-480q0 95-66.5 161.5T480-252ZM172-666v-122h122v28h-94v94h-28Zm588 0v-94h-94v-28h122v122h-28Z"/>
    </Icon>
  );
});

IconMaterialAllOutW100Filled.displayName = 'OnesyIconMaterialAllOutW100Filled';

export default IconMaterialAllOutW100Filled;
