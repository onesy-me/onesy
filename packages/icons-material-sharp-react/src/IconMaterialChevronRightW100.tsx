import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChevronRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChevronRightW100'

      short_name='ChevronRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M540-480 356-664l20-20 204 204-204 204-20-20 184-184Z"/>
    </Icon>
  );
});

IconMaterialChevronRightW100.displayName = 'OnesyIconMaterialChevronRightW100';

export default IconMaterialChevronRightW100;
