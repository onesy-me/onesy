import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBidLandscape = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BidLandscape'

      short_name='BidLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-162v82h560v-350L550-312q-11 13-28.5 13.5T492-310L360-442 200-282Zm0-114 132-132q12-12 28-12t28 12l130 130 242-272v-90H200v364Zm0-154v-120 272-158 274-160 162-270Zm0 154v-364 362-158 160Zm0 114v-160 162-270 350-82Z"/>
    </Icon>
  );
});

IconMaterialBidLandscape.displayName = 'OnesyIconMaterialBidLandscape';

export default IconMaterialBidLandscape;
