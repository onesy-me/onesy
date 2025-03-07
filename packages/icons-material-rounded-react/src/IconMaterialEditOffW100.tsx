import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOffW100'

      short_name='EditOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M780-699 587-507q-4 4-9.5 4.5T567-507q-5-5-5-10t5-10l112-112-40-40-112 112q-4 4-9.5 4.5T507-567q-5-5-4.5-10t4.5-10l192-193q4-4 9.5-6t11.5-2q5 0 10.5 1.5T741-780l39 39q5 5 6.5 10.5T788-719q0 5-2 10.5t-6 9.5ZM200-200h40l240-240-20-20-20-20-240 240v40Zm580 60L500-419 270-189q-8 8-19.5 12.5T227-172h-25q-13 0-21.5-8.5T172-202v-25q0-12 4.5-23.5T189-270l230-230-279-280q-4-4-4.5-9.5T140-800q5-5 10-5t10 5l640 640q4 4 4.5 9.5T800-140q-5 5-10 5t-10-5Zm-19-580-41-41 41 41Zm-122 41 40 40-40-40ZM460-460l-20-20 40 40-20-20Z"/>
    </Icon>
  );
});

IconMaterialEditOffW100.displayName = 'OnesyIconMaterialEditOffW100';

export default IconMaterialEditOffW100;
