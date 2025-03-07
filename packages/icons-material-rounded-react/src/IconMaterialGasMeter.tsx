import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGasMeter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GasMeter'

      short_name='GasMeter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-80q-66 0-113-47t-47-113v-400q0-66 47-113t113-47h40v-40q0-17 11.5-28.5T400-880q17 0 28.5 11.5T440-840v40h80v-40q0-17 11.5-28.5T560-880q17 0 28.5 11.5T600-840v40h40q66 0 113 47t47 113v400q0 66-47 113T640-80H320Zm0-80h320q33 0 56.5-23.5T720-240v-400q0-33-23.5-56.5T640-720H320q-33 0-56.5 23.5T240-640v400q0 33 23.5 56.5T320-160Zm40-400h240q17 0 28.5-11.5T640-600q0-17-11.5-28.5T600-640H360q-17 0-28.5 11.5T320-600q0 17 11.5 28.5T360-560Zm120 320q42 0 71-28.5t29-69.5q0-17-4-29t-15-28l-58-68q-9-11-23-11t-23 11l-58 69q-11 16-15 27.5t-4 28.5q0 41 29 69.5t71 28.5ZM240-720v560-560Z"/>
    </Icon>
  );
});

IconMaterialGasMeter.displayName = 'OnesyIconMaterialGasMeter';

export default IconMaterialGasMeter;
