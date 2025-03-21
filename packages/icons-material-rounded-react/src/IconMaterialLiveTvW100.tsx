import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLiveTvW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiveTvW100'

      short_name='LiveTv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m441-410 141-91q11-7 11-19t-11-19l-141-91q-11-8-23-1.5T406-611v182q0 14 12 20.5t23-1.5ZM192-252q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H588v50q0 13-8.5 21.5T558-172H402q-13 0-21.5-8.5T372-202v-50H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialLiveTvW100.displayName = 'OnesyIconMaterialLiveTvW100';

export default IconMaterialLiveTvW100;
