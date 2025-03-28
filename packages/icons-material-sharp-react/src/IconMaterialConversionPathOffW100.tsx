import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialConversionPathOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConversionPathOffW100'

      short_name='ConversionPathOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M852-68 90-830l20-20L872-88l-20 20ZM440-226q-56 0-95-39t-39-95q0-56 39-95t95-39h26l28 28h-54q-44 0-75 31t-31 75q0 44 31 75t75 31h266l97 97q-10 5-20.5 8t-22.5 3q-35 0-61.5-22.5T667-226H440Zm412 6L740-332q5-1 10-1.5t10-.5q39 0 66.5 27.5T854-240q0 5-.5 10t-1.5 10ZM588-484l-21-21q26-13 42.5-38.5T626-600q0-44-31-75t-75-31H366l-28-28h182q56 0 95 39t39 95q0 37-18 68t-48 48ZM200-626q-39 0-66.5-27.5T106-720q0-27 14-49t37-34l127 127q-12 23-35 36.5T200-626Z"/>
    </Icon>
  );
});

IconMaterialConversionPathOffW100.displayName = 'OnesyIconMaterialConversionPathOffW100';

export default IconMaterialConversionPathOffW100;
