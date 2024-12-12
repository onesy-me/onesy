import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForwardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardW100'

      short_name='Forward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m624-316-20-20 184-184-184-184 20-20 204 204-204 204Zm-492 64v-108q0-72 51-123t123-51h314L450-704l20-20 204 204-204 204-20-20 170-170H306q-60 0-103 43t-43 103v108h-28Z"/>
    </Icon>
  );
});

IconMaterialForwardW100.displayName = 'OnesyIconMaterialForwardW100';

export default IconMaterialForwardW100;
