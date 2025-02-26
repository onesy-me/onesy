import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsBike = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsBike'

      short_name='DirectionsBike'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M620-740q-33 0-56.5-23.5T540-820q0-33 23.5-56.5T620-900q33 0 56.5 23.5T700-820q0 33-23.5 56.5T620-740ZM432-540l88 92v248h-80v-200L252-564l172-172q13-13 27.5-18.5T484-760q18 0 32.5 5.5T544-736l76 76q27 27 63 43.5t81 16.5v80q-63 0-114-22.5T560-604l-32-32-96 96Zm-232 60q85 0 142.5 57.5T400-280q0 85-57.5 142.5T200-80q-85 0-142.5-57.5T0-280q0-85 57.5-142.5T200-480Zm0 340q57 0 98.5-41.5T340-280q0-57-41.5-98.5T200-420q-57 0-98.5 41.5T60-280q0 57 41.5 98.5T200-140Zm560-340q85 0 142.5 57.5T960-280q0 85-57.5 142.5T760-80q-85 0-142.5-57.5T560-280q0-85 57.5-142.5T760-480Zm0 340q57 0 98.5-41.5T900-280q0-57-41.5-98.5T760-420q-57 0-98.5 41.5T620-280q0 57 41.5 98.5T760-140Z"/>
    </Icon>
  );
});

IconMaterialDirectionsBike.displayName = 'OnesyIconMaterialDirectionsBike';

export default IconMaterialDirectionsBike;
