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
      <path d="M520-240h40v-80h-40q-50 0-85-35t-35-85v-40h-80v40q0 83 58.5 141.5T520-240Zm-40 120q-117 0-198.5-81.5T200-400q0-77 25.5-155t66-141.5Q332-760 382-800t98-40q49 0 98.5 40t90 103.5Q709-633 734.5-555T760-400q0 117-81.5 198.5T480-120Z"/>
    </Icon>
  );
});

IconMaterialEggFilled.displayName = 'OnesyIconMaterialEggFilled';

export default IconMaterialEggFilled;
