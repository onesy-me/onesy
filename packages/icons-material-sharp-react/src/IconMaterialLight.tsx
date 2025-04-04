import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Light'

      short_name='Light'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-66 0-113-47t-47-113H129q-4-16-6.5-36.5T120-360q2-140 93-241.5T440-718v-122h80v122q136 15 227 116.5T840-360q0 23-2.5 43.5T831-280H640q0 66-47 113t-113 47ZM200-360h560q0-116-82-198t-198-82q-116 0-198 82t-82 198Zm280 160q33 0 56.5-23.5T560-280H400q0 33 23.5 56.5T480-200Zm0-80Z"/>
    </Icon>
  );
});

IconMaterialLight.displayName = 'OnesyIconMaterialLight';

export default IconMaterialLight;
