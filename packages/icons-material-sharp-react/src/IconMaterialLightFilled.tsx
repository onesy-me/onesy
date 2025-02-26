import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightFilled'

      short_name='Light'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-66 0-113-47t-47-113H129q-4-16-6.5-36.5T120-360q2-140 93-241.5T440-718v-122h80v122q136 15 227 116.5T840-360q0 23-2.5 43.5T831-280H640q0 66-47 113t-113 47ZM200-360h560q0-116-82-198t-198-82q-116 0-198 82t-82 198Z"/>
    </Icon>
  );
});

IconMaterialLightFilled.displayName = 'OnesyIconMaterialLightFilled';

export default IconMaterialLightFilled;
