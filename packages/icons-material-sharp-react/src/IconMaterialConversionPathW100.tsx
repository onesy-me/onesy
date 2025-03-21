import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialConversionPathW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConversionPathW100'

      short_name='ConversionPath'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-146q-35 0-61.5-22.5T667-226H440q-56 0-95-39t-39-95q0-56 39-95t95-39h80q43.72 0 74.86-31.19 31.14-31.2 31.14-75Q626-644 594.86-675T520-706H293q-5 35-31.5 57.5T200-626q-39.17 0-66.58-27.38Q106-680.76 106-719.88q0-39.12 27.42-66.62Q160.83-814 200-814q35 0 61.5 22.5T293-734h227q56 0 95 39t39 95q0 56-39 95t-95 39h-80q-43.73 0-74.86 31.19-31.14 31.2-31.14 75Q334-316 365.14-285q31.13 31 74.86 31h227q5-35 31.5-57.5T760-334q39.17 0 66.58 27.38Q854-279.24 854-240.12q0 39.12-27.42 66.62Q799.17-146 760-146ZM200-654q27 0 46.5-19.5T266-720q0-27-19.5-46.5T200-786q-27 0-46.5 19.5T134-720q0 27 19.5 46.5T200-654Z"/>
    </Icon>
  );
});

IconMaterialConversionPathW100.displayName = 'OnesyIconMaterialConversionPathW100';

export default IconMaterialConversionPathW100;
