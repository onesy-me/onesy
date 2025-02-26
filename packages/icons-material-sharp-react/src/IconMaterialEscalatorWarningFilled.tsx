import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEscalatorWarningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EscalatorWarningFilled'

      short_name='EscalatorWarning'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-720q-33 0-56.5-23.5T180-800q0-33 23.5-56.5T260-880q33 0 56.5 23.5T340-800q0 33-23.5 56.5T260-720Zm420 200q-25 0-42.5-17.5T620-580q0-25 17.5-42.5T680-640q25 0 42.5 17.5T740-580q0 25-17.5 42.5T680-520ZM180-80v-280h-60v-320h246l166 287 58-87h210v200h-40v200H600v-284l-31 44h-88L380-496v416H180Z"/>
    </Icon>
  );
});

IconMaterialEscalatorWarningFilled.displayName = 'OnesyIconMaterialEscalatorWarningFilled';

export default IconMaterialEscalatorWarningFilled;
