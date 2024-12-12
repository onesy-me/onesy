import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLiveTvFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiveTvFilled'

      short_name='LiveTv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m442-380 166-106q18-12 18-34t-18-34L442-660q-20-13-41-2t-21 35v214q0 24 21 35t41-2ZM160-200q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v40q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160v-40H160Z"/>
    </Icon>
  );
});

IconMaterialLiveTvFilled.displayName = 'OnesyIconMaterialLiveTvFilled';

export default IconMaterialLiveTvFilled;
