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
      <path d="M559.88-496q39.12 0 66.62-27.38 27.5-27.38 27.5-66.5 0-39.12-27.38-66.62-27.38-27.5-66.5-27.5-39.12 0-66.62 27.38-27.5 27.38-27.5 66.5 0 39.12 27.38 66.62 27.38 27.5 66.5 27.5ZM350-320q42-44 96-68t114-24q60 0 114 24t96 68q13 0 21.5-9.5T800-352v-416q0-14-9-23t-23-9H352q-14 0-23 9t-9 23v416q0 13 8.5 22.5T350-320Zm2 28q-24.75 0-42.37-17.63Q292-327.25 292-352v-416q0-24.75 17.63-42.38Q327.25-828 352-828h416q24.75 0 42.38 17.62Q828-792.75 828-768v416q0 24.75-17.62 42.37Q792.75-292 768-292H352ZM192-132q-24.75 0-42.37-17.63Q132-167.25 132-192v-462q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v462q0 14 9 23t23 9h462q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H192Zm368-392q-27 0-46.5-19.5T494-590q0-27 19.5-46.5T560-656q27 0 46.5 19.5T626-590q0 27-19.5 46.5T560-524ZM390-320h340q-35-32-78.5-48T560-384q-48 0-91.5 16T390-320Zm170-240Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccountW100.displayName = 'OnesyIconMaterialSwitchAccountW100';

export default IconMaterialSwitchAccountW100;
