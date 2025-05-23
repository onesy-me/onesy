import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCarryOnBagInactiveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarryOnBagInactiveW100Filled'

      short_name='CarryOnBagInactive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M702-122 592-229q8 8 13 19t5 24q0 25.83-18.12 43.92-18.12 18.08-44 18.08T504-142.12q-18-18.12-18-44T504.08-230q18.09-18 43.92-18 11 0 22 4t19 12l-44-44q-19 0-34.5 7.5T483-249q-11 11-17 25.5t-8 29.5q-1 9-7 15.5t-14 6.5h-63v-278l-28-28v306h-34q-25.75 0-42.87-17.13Q252-206.25 252-232v-340L94-730q-4-4-4.5-9.5T94-750q5-5 10-5t10 5l608 608q4 4 4.5 9.5t-4.2 10.2q-4.3 4.3-9.8 4.3-5.5 0-10.5-4ZM497-481l-96-96q-14-14-6.34-32.5Q402.31-628 422-628h98v-172h-46q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h44q12.75 0 21.38 8.62Q548-810.75 548-798v296q0 19.69-18.5 27.34Q511-467 497-481Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagInactiveW100Filled.displayName = 'OnesyIconMaterialCarryOnBagInactiveW100Filled';

export default IconMaterialCarryOnBagInactiveW100Filled;
