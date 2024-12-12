import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermMediaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermMediaFilled'

      short_name='PermMedia'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-120v-600h80v520h680v80H40Zm160-160v-600h280l80 80h360v520H200Zm160-160h400L622-620l-92 120-62-80-108 140Z"/>
    </Icon>
  );
});

IconMaterialPermMediaFilled.displayName = 'OnesyIconMaterialPermMediaFilled';

export default IconMaterialPermMediaFilled;
