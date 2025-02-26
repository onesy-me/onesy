import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLogoDevFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LogoDevFilled'

      short_name='LogoDev'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-360h112l30-30v-180l-30-30H240v240Zm46-46v-148h50v148h-50Zm165 0v-52h52v-46h-52v-50h82v-46H405v240h128v-46h-82Zm190-30-43-164h-48l63 239h56l63-239h-48l-43 164ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialLogoDevFilled.displayName = 'OnesyIconMaterialLogoDevFilled';

export default IconMaterialLogoDevFilled;
