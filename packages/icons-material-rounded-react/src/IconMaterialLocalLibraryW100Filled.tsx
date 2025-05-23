import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalLibraryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalLibraryW100Filled'

      short_name='LocalLibrary'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-278v-293q0-14 10.5-22.5T207-600q77 12 145.5 46.5T480-468q59-51 127.5-85.5T753-600q14-2 24.5 6.5T788-571v293q0 11-7.5 19.5T762-248q-72 11-132.5 33.5T509-152q-7 5-14 7t-15 2q-8 0-15-2t-14-7q-60-40-120-62.5T198-248q-11-2-18.5-10.5T172-278Zm308-344q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialLocalLibraryW100Filled.displayName = 'OnesyIconMaterialLocalLibraryW100Filled';

export default IconMaterialLocalLibraryW100Filled;
