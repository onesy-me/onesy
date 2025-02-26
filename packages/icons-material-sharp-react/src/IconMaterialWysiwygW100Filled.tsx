import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWysiwygW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WysiwygW100Filled'

      short_name='Wysiwyg'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-28h560v-480H200v480Zm80-306v-28h400v28H280Zm0 160v-28h240v28H280Z"/>
    </Icon>
  );
});

IconMaterialWysiwygW100Filled.displayName = 'OnesyIconMaterialWysiwygW100Filled';

export default IconMaterialWysiwygW100Filled;
