import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterVintageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterVintageW100Filled'

      short_name='FilterVintage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M481-186q-45 0-79-34.5T373-294q-36 24-81 13.5T223-332q-23-39-8.5-84.5T271-480q-42-18-56.5-63.5T223-628q23-39 69-51.5t81 11.5q-5-41 29-74.5t79-33.5q45 0 79 33.5t29 74.5q35-24 80-11.5t68 51.5q23 39 8.5 84.5T689-480q42 18 56.5 63.5T737-332q-24 41-68 51.5T589-294q5 39-29 73.5T481-186Zm-1-185q45 0 77-32t32-77q0-45-32-77t-77-32q-45 0-77 32t-32 77q0 45 32 77t77 32Z"/>
    </Icon>
  );
});

IconMaterialFilterVintageW100Filled.displayName = 'OnesyIconMaterialFilterVintageW100Filled';

export default IconMaterialFilterVintageW100Filled;
