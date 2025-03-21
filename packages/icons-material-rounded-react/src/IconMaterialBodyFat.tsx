import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBodyFat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BodyFat'

      short_name='BodyFat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M684-130 124-408q-23-11-33.5-30.5T80-479q0-21 10.5-41t33.5-31l560-280q20-10 40.5-8.5T762-827q17 11 27.5 28t10.5 40v119q17 0 28.5 11.5T840-600q0 17-11.5 28.5T800-560h-80q-17 0-28.5-11.5T680-600q0-17 11.5-28.5T720-640v-117l-176 87q27 43 41.5 91t14.5 99q0 51-14.5 100T543-288l176 87v-119q-17 0-28-11.5T680-360q0-17 11.5-28.5T720-400h80q17 0 28.5 11.5T840-360q0 17-11.5 28.5T800-320v119q0 23-10.5 40T762-133q-17 11-37.5 12t-40.5-9ZM470-325q24-34 37-73.5t13-81.5q0-42-13-80.5T471-634L160-480l310 155Z"/>
    </Icon>
  );
});

IconMaterialBodyFat.displayName = 'OnesyIconMaterialBodyFat';

export default IconMaterialBodyFat;
