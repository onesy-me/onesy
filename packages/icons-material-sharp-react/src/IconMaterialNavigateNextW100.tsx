import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNavigateNextW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateNextW100'

      short_name='NavigateNext'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M540-480 356-664l20-20 204 204-204 204-20-20 184-184Z"/>
    </Icon>
  );
});

IconMaterialNavigateNextW100.displayName = 'OnesyIconMaterialNavigateNextW100';

export default IconMaterialNavigateNextW100;
