import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsBoatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsBoatW100Filled'

      short_name='DirectionsBoat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m198-254-59-219 73-25v-230h200v-120h136v120h200v230l77 27-63 217q-32-15-57.5-37T640-358q-36 44-72.5 75T480-252q-51 0-87.5-31T320-358q-38 45-64 67t-58 37ZM106-92v-28h54q42 0 83-13t77-39q36 26 77 38t83 12q42 0 83-12t77-38q36 26 77 39t83 13h54v28h-54q-42 0-82-10t-78-30q-38 20-78.5 30T480-92q-41 0-81.5-10T320-132q-38 20-78 30t-82 10h-54Zm134-416 240-78 240 78v-192H240v192Z"/>
    </Icon>
  );
});

IconMaterialDirectionsBoatW100Filled.displayName = 'OnesyIconMaterialDirectionsBoatW100Filled';

export default IconMaterialDirectionsBoatW100Filled;
