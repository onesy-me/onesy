import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWineBarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WineBarW100Filled'

      short_name='WineBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-200v-186q-86-13-133-73.5T286-600v-157.6q0-13.4 8.63-21.9 8.62-8.5 21.37-8.5h328q12.75 0 21.38 8.62Q674-770.75 674-758v158q0 80-47 140.5T494-386v186h96q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H370q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h96ZM314-614h332v-146H314v146Z"/>
    </Icon>
  );
});

IconMaterialWineBarW100Filled.displayName = 'OnesyIconMaterialWineBarW100Filled';

export default IconMaterialWineBarW100Filled;
