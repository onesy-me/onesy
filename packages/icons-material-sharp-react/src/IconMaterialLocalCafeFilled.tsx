import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalCafeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalCafeFilled'

      short_name='LocalCafe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120v-80h640v80H160Zm0-160v-560h720v280H720v280H160Zm560-360h80v-120h-80v120Z"/>
    </Icon>
  );
});

IconMaterialLocalCafeFilled.displayName = 'OnesyIconMaterialLocalCafeFilled';

export default IconMaterialLocalCafeFilled;
