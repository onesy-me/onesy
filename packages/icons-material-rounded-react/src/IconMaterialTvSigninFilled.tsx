import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTvSigninFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvSigninFilled'

      short_name='TvSignin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-360h320v-22q0-45-44-71.5T480-480q-72 0-116 26.5T320-382v22Zm160-160q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM160-200q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v40q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160v-40H160Z"/>
    </Icon>
  );
});

IconMaterialTvSigninFilled.displayName = 'OnesyIconMaterialTvSigninFilled';

export default IconMaterialTvSigninFilled;
