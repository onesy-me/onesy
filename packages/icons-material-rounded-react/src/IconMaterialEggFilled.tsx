import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEggFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EggFilled'

      short_name='Egg'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-117 0-198.5-81.5T200-400q0-77 25.5-155t66-141.5Q332-760 382-800t98-40q49 0 98.5 40t90 103.5Q709-633 734.5-555T760-400q0 117-81.5 198.5T480-120Zm40-120q17 0 28.5-11.5T560-280q0-17-11.5-28.5T520-320q-50 0-85-35t-35-85q0-17-11.5-28.5T360-480q-17 0-28.5 11.5T320-440q0 83 58.5 141.5T520-240Z"/>
    </Icon>
  );
});

IconMaterialEggFilled.displayName = 'OnesyIconMaterialEggFilled';

export default IconMaterialEggFilled;
