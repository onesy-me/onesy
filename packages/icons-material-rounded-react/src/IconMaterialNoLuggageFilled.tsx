import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoLuggageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoLuggageFilled'

      short_name='NoLuggage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m791-57-73-72q-8 5-17.5 7t-20.5 2q0 17-11.5 28.5T640-80q-17 0-28.5-11.5T600-120H360q0 17-11.5 28.5T320-80q-17 0-28.5-11.5T280-120q-33 0-56.5-23.5T200-200v-447L55-792q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57ZM360-487v207q0 17 11.5 28.5T400-240q17 0 28.5-11.5T440-280v-127l-80-80Zm160 160v47q0 17 11.5 28.5T560-240q17 0 28.5-11.5T600-280v33l-80-80Zm172-56-92-92v-85q0-17-11.5-28.5T560-600q-17 0-28.5 11.5T520-560v5L383-692q-11-11-17-25.5t-6-30.5v-52q0-33 23.5-56.5T440-880h80q33 0 56.5 23.5T600-800v80h80q33 0 56.5 23.5T760-640v228q0 27-24.5 37.5T692-383ZM440-720h80v-80h-80v80Z"/>
    </Icon>
  );
});

IconMaterialNoLuggageFilled.displayName = 'OnesyIconMaterialNoLuggageFilled';

export default IconMaterialNoLuggageFilled;
