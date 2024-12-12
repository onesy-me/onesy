import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubscriptFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubscriptFilled'

      short_name='Subscript'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-160v-120h120v-40H760v-40h160v120H800v40h120v40H760Zm-525-80 185-291-172-269h106l124 200h4l123-200h107L539-531l186 291H618L482-457h-4L342-240H235Z"/>
    </Icon>
  );
});

IconMaterialSubscriptFilled.displayName = 'OnesyIconMaterialSubscriptFilled';

export default IconMaterialSubscriptFilled;
