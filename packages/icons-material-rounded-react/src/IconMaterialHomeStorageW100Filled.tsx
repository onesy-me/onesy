import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeStorageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeStorageW100Filled'

      short_name='HomeStorage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M295-204q-21.66 0-38.46-14.18Q239.73-232.36 236-254l-48.61-290.7q-2.39-14.3 6.37-24.8T217-580h526q14.48 0 23.24 10.5 8.76 10.5 6.37 24.8L724-254q-3.73 21.64-20.54 35.82Q686.66-204 665-204H295Zm105-214h160q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H400q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4ZM240-640q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h480q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H240Zm80-88q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h320q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H320Z"/>
    </Icon>
  );
});

IconMaterialHomeStorageW100Filled.displayName = 'OnesyIconMaterialHomeStorageW100Filled';

export default IconMaterialHomeStorageW100Filled;
