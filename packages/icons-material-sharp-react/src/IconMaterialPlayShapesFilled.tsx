import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlayShapesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayShapesFilled'

      short_name='PlayShapes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m80-520 200-360 200 360H80Zm200 400q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm240 0v-320h320v320H520Zm56-420-56-56 104-104-104-104 56-56 104 104 104-104 56 56-104 104 104 104-56 56-104-104-104 104Z"/>
    </Icon>
  );
});

IconMaterialPlayShapesFilled.displayName = 'OnesyIconMaterialPlayShapesFilled';

export default IconMaterialPlayShapesFilled;
