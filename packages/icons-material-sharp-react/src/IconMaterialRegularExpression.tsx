import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRegularExpression = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RegularExpression'

      short_name='RegularExpression'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M197-199q-56-57-86.5-130T80-482q0-80 30-153t87-130l57 57q-46 45-70 103.5T160-482q0 64 24.5 122.5T254-256l-57 57Zm183-41q-25 0-42.5-17.5T320-300q0-25 17.5-42.5T380-360q25 0 42.5 17.5T440-300q0 25-17.5 42.5T380-240Zm139-200v-71l-61 36-40-70 61-35-61-35 40-70 61 36v-71h80v71l61-36 40 70-61 35 61 35-40 70-61-36v71h-80Zm244 241-57-57q46-45 70-103.5T800-482q0-64-24.5-122.5T706-708l57-57q56 57 86.5 130T880-482q0 80-30 153t-87 130Z"/>
    </Icon>
  );
});

IconMaterialRegularExpression.displayName = 'OnesyIconMaterialRegularExpression';

export default IconMaterialRegularExpression;
