import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrailLengthShortFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthShortFilled'

      short_name='TrailLengthShort'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-280q-73 0-127.5-45.5T404-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h204q5-23 13.5-43t22.5-37H280q-17 0-28.5-11.5T240-640q0-17 11.5-28.5T280-680h320q83 0 141.5 58.5T800-480q0 83-58.5 141.5T600-280Zm-280 0q-17 0-28.5-11.5T280-320q0-17 11.5-28.5T320-360h40q17 0 28.5 11.5T400-320q0 17-11.5 28.5T360-280h-40Z"/>
    </Icon>
  );
});

IconMaterialTrailLengthShortFilled.displayName = 'OnesyIconMaterialTrailLengthShortFilled';

export default IconMaterialTrailLengthShortFilled;
