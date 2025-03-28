import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRobotW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RobotW100'

      short_name='Robot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-25 0-42.5-17.5T172-232v-368q0-78 55-133t133-55h240q78 0 133 55t55 133v368q0 25-17.5 42.5T728-172H232Zm0-28h496q14 0 23-9t9-23v-368q0-66-47-113t-113-47H360q-66 0-113 47t-47 113v368q0 14 9 23t23 9Zm128-306q-23 0-38.5-15.5T306-560q0-23 15.5-38.5T360-614q23 0 38.5 15.5T414-560q0 23-15.5 38.5T360-506Zm240 0q-23 0-38.5-15.5T546-560q0-23 15.5-38.5T600-614q23 0 38.5 15.5T654-560q0 23-15.5 38.5T600-506ZM306-200v-74q0-25 17.5-42.5T366-334h228q25 0 42.5 17.5T654-274v74h-28v-74q0-14-9-23t-23-9H494v106h-28v-106H366q-14 0-23 9t-9 23v74h-28Zm-74 0h528-560 32Z"/>
    </Icon>
  );
});

IconMaterialRobotW100.displayName = 'OnesyIconMaterialRobotW100';

export default IconMaterialRobotW100;
