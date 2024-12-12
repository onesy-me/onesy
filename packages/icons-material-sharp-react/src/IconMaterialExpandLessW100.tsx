import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandLessW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandLessW100'

      short_name='ExpandLess'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m296-380-20-20 204-204 204 204-20 20-184-184-184 184Z"/>
    </Icon>
  );
});

IconMaterialExpandLessW100.displayName = 'OnesyIconMaterialExpandLessW100';

export default IconMaterialExpandLessW100;
