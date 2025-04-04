import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialListAltAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListAltAddFilled'

      short_name='ListAltAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-440q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520H480q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440h160Zm0-160q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680H480q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600h160Zm40 440h-80q-17 0-28.5-11.5T560-200q0-17 11.5-28.5T600-240h80v-80q0-17 11.5-28.5T720-360q17 0 28.5 11.5T760-320v80h80q17 0 28.5 11.5T880-200q0 17-11.5 28.5T840-160h-80v80q0 17-11.5 28.5T720-40q-17 0-28.5-11.5T680-80v-80ZM320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v301q0 18-15.5 28t-32.5 3q-17-5-35.5-8t-36.5-3q-53 0-99 21t-79 58h-62q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280h14q-7 19-10.5 39t-3.5 41q0 8 .5 17t1.5 17q2 18-8.5 32T446-120H200Z"/>
    </Icon>
  );
});

IconMaterialListAltAddFilled.displayName = 'OnesyIconMaterialListAltAddFilled';

export default IconMaterialListAltAddFilled;
