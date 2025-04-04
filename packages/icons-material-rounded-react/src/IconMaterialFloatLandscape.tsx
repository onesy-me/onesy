import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFloatLandscape = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloatLandscape'

      short_name='FloatLandscape'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 896q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256h640q33 0 56.5 23.5T880 336v160q0 17-11.5 28.5T840 536q-17 0-28.5-11.5T800 496V336H160v480h400q17 0 28.5 11.5T600 856q0 17-11.5 28.5T560 896H160Zm560 0q-17 0-28.5-11.5T680 856V656q0-17 11.5-28.5T720 616h120q17 0 28.5 11.5T880 656v200q0 17-11.5 28.5T840 896H720ZM480 576Z"/>
    </Icon>
  );
});

IconMaterialFloatLandscape.displayName = 'OnesyIconMaterialFloatLandscape';

export default IconMaterialFloatLandscape;
