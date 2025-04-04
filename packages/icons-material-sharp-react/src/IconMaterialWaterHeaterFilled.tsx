import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterHeaterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterHeaterFilled'

      short_name='WaterHeater'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M311-534q0 45 22 82t57 60q-10-14-15.5-30t-5.5-34q0-23 8.5-43t24.5-35l78-77 79 77q16 15 24 35t8 43q0 18-5.5 34T570-392q35-23 57-60t22-82q0-47-25-88t-67-64l-13 17q-5 5-11 8.5t-13 3.5q-13 0-22-9t-9-22v-80l-28 16q-28 16-61 46.5t-61 74Q311-588 311-534Zm169 7-37 36q-8 8-11 16.5t-3 18.5q0 21 15 35.5t36 14.5q21 0 36-14.5t15-35.5q0-11-3-19t-11-16l-37-36ZM240-80q-33 0-56.5-23.5T160-160v-560q0-66 47-113t113-47h320q66 0 113 47t47 113v560q0 33-23.5 56.5T720-80H240Zm120-200q33 0 49.5-20t70.5-20q54 0 72 20t48 20q30 0 48-20t72-20v-400q0-33-23.5-56.5T640-800H320q-33 0-56.5 23.5T240-720v400q54 0 70.5 20t49.5 20Z"/>
    </Icon>
  );
});

IconMaterialWaterHeaterFilled.displayName = 'OnesyIconMaterialWaterHeaterFilled';

export default IconMaterialWaterHeaterFilled;
