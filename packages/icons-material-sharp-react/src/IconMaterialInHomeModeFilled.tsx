import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInHomeModeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InHomeModeFilled'

      short_name='InHomeMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M597-80 428-250l56-57 113 113 227-226 56 57L597-80Zm-437-80v-375l-72 55-47-63 439-337 440 336-48 64-59-44-216 217-113-113-171 172 87 88H160Z"/>
    </Icon>
  );
});

IconMaterialInHomeModeFilled.displayName = 'OnesyIconMaterialInHomeModeFilled';

export default IconMaterialInHomeModeFilled;
