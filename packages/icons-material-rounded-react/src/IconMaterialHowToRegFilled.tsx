import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHowToRegFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HowToRegFilled'

      short_name='HowToReg'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160q-33 0-56.5-23.5T80-240v-32q0-33 17-62t47-44q51-26 115-44t141-18h26.5q12.5 0 25.5 2 20 2 26 21t-8 33l-17 17q-31 31-35 73t19 77q12 19 3.5 38T412-160H160Zm462-96 174-174q11-11 28-11t28 11q11 11 11 28t-11 28L650-172q-12 12-28 12t-28-12l-82-82q-11-11-11-28t11-28q11-11 28-11t28 11l54 54Z"/>
    </Icon>
  );
});

IconMaterialHowToRegFilled.displayName = 'OnesyIconMaterialHowToRegFilled';

export default IconMaterialHowToRegFilled;
