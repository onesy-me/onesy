import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOffW100Filled'

      short_name='EditOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M787-718q0 5-2 10.5t-6 9.5L598-518q-9 9-21 9t-21-9l-38-38q-9-9-9-21t9-21l180-181q4-4 9.5-6t11.5-2q5 0 10.5 2t10.5 6l39 39q4 5 6 10.5t2 11.5Zm-7 578L500-419 270-189q-8 8-19.5 12.5T227-172h-25q-13 0-21.5-8.5T172-202v-25q0-12 4.5-23.5T189-270l230-230-279-280q-4-4-4.5-9.5T140-800q5-5 10-5t10 5l640 640q4 4 4.5 9.5T800-140q-5 5-10 5t-10-5Zm-81-519 61-60-41-41-60 61 40 40Z"/>
    </Icon>
  );
});

IconMaterialEditOffW100Filled.displayName = 'OnesyIconMaterialEditOffW100Filled';

export default IconMaterialEditOffW100Filled;
