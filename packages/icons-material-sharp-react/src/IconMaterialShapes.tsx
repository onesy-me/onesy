import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShapes = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Shapes'

      short_name='Shapes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-360ZM320-242q10 1 19.5 1.5t20.5.5q11 0 20.5-.5T400-242v82h400v-400h-82q1-10 1.5-19.5t.5-20.5q0-11-.5-20.5T718-640h162v560H320v-162Zm40-78q-117 0-198.5-81.5T80-600q0-117 81.5-198.5T360-880q117 0 198.5 81.5T640-600q0 117-81.5 198.5T360-320Zm0-80q83 0 141.5-58.5T560-600q0-83-58.5-141.5T360-800q-83 0-141.5 58.5T160-600q0 83 58.5 141.5T360-400Zm0-200Z"/>
    </Icon>
  );
});

IconMaterialShapes.displayName = 'OnesyIconMaterialShapes';

export default IconMaterialShapes;
