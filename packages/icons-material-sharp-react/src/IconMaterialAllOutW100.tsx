import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAllOutW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllOutW100'

      short_name='AllOut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-122h28v94h94v28H172Zm494 0v-28h94v-94h28v122H666Zm-186-80q-95 0-161.5-66.5T252-480q0-95 66.5-161.5T480-708q95 0 161.5 66.5T708-480q0 95-66.5 161.5T480-252Zm0-28q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280ZM172-666v-122h122v28h-94v94h-28Zm588 0v-94h-94v-28h122v122h-28ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialAllOutW100.displayName = 'OnesyIconMaterialAllOutW100';

export default IconMaterialAllOutW100;
