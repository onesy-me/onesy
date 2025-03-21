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
      <path d="M600-360ZM400-80q-33 0-56.5-23.5T320-160v-40q0-17 11.5-28.5T360-240q17 0 28.5 11.5T400-200v40h400v-400h-40q-17 0-28.5-11.5T720-600q0-17 11.5-28.5T760-640h40q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H400Zm-40-240q-117 0-198.5-81.5T80-600q0-117 81.5-198.5T360-880q117 0 198.5 81.5T640-600q0 117-81.5 198.5T360-320Zm0-80q83 0 141.5-58.5T560-600q0-83-58.5-141.5T360-800q-83 0-141.5 58.5T160-600q0 83 58.5 141.5T360-400Zm0-200Z"/>
    </Icon>
  );
});

IconMaterialShapes.displayName = 'OnesyIconMaterialShapes';

export default IconMaterialShapes;
