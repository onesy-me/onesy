import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPublishW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublishW100'

      short_name='Publish'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-212v-352l-90 90-20-20 124-124 124 124-20 20-90-90v352h-28ZM212-598v-150h536v150h-28v-122H240v122h-28Z"/>
    </Icon>
  );
});

IconMaterialPublishW100.displayName = 'OnesyIconMaterialPublishW100';

export default IconMaterialPublishW100;
