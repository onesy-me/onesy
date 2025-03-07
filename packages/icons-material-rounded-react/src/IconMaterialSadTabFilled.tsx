import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSadTabFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SadTabFilled'

      short_name='SadTab'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M300 756h60v-60h240v60h60v-60h-60v-60H360v60h-60v60Zm20-180h60V476h-60v100Zm260 0h60V476h-60v100ZM160 896q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880 416v400q0 33-23.5 56.5T800 896H160Z"/>
    </Icon>
  );
});

IconMaterialSadTabFilled.displayName = 'OnesyIconMaterialSadTabFilled';

export default IconMaterialSadTabFilled;
