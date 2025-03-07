import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchAccountW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccountW100'

      short_name='SwitchAccount'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M559.88-496q39.12 0 66.62-27.38 27.5-27.38 27.5-66.5 0-39.12-27.38-66.62-27.38-27.5-66.5-27.5-39.12 0-66.62 27.38-27.5 27.38-27.5 66.5 0 39.12 27.38 66.62 27.38 27.5 66.5 27.5ZM350-320q42-44 96-68t114-24q60 0 114 24t96 68h30v-480H320v480h30Zm-58 28v-536h536v536H292ZM132-132v-536h28v508h508v28H132Zm428-392q-27 0-46.5-19.5T494-590q0-27 19.5-46.5T560-656q27 0 46.5 19.5T626-590q0 27-19.5 46.5T560-524ZM390-320h340q-35-32-78.5-48T560-384q-48 0-91.5 16T390-320Zm170-240Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccountW100.displayName = 'OnesyIconMaterialSwitchAccountW100';

export default IconMaterialSwitchAccountW100;
