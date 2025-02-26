import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForkRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForkRightW100'

      short_name='ForkRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M386-172v-561l-90 90-20-20 124-124 124 124-20 20-90-90v355q30-54 75.5-81T593-486q27 0 52 2t49 6l-90-90 20-20 124 124-124 124-20-20 90-90q-24-4-50-6.5t-51-2.5q-59 0-109 37.5T414-308v136h-28Z"/>
    </Icon>
  );
});

IconMaterialForkRightW100.displayName = 'OnesyIconMaterialForkRightW100';

export default IconMaterialForkRightW100;
