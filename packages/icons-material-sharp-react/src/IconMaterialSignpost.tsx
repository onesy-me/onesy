import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignpost = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Signpost'

      short_name='Signpost'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-80v-160H240L120-360l120-120h200v-80H160v-240h280v-80h80v80h200l120 120-120 120H520v80h280v240H520v160h-80ZM240-640h447l40-40-40-40H240v80Zm33 320h447v-80H273l-40 40 40 40Zm-33-320v-80 80Zm480 320v-80 80Z"/>
    </Icon>
  );
});

IconMaterialSignpost.displayName = 'OnesyIconMaterialSignpost';

export default IconMaterialSignpost;
