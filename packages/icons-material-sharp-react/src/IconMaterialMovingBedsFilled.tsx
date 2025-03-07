import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovingBedsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovingBedsFilled'

      short_name='MovingBeds'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-800h520v800H80Zm80-459q18-11 38-16t42-5h200q22 0 42 5t38 16v-261H160v261Zm180-61q-33 0-56.5-23.5T260-680q0-33 23.5-56.5T340-760q33 0 56.5 23.5T420-680q0 33-23.5 56.5T340-600Zm440 260-56-56 43-44H640v-80h127l-43-44 56-56 140 140-140 140ZM300-200h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Z"/>
    </Icon>
  );
});

IconMaterialMovingBedsFilled.displayName = 'OnesyIconMaterialMovingBedsFilled';

export default IconMaterialMovingBedsFilled;
