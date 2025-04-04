import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSendAndArchive = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendAndArchive'

      short_name='SendAndArchive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m660-236-58-58q-6-6-14-6t-14 6q-6 6-6 14t6 14l78 78q12 12 28 12t28-12l78-78q6-6 6-14t-6-14q-6-6-14-6t-14 6l-58 58v-144q0-8-6-14t-14-6q-8 0-14 6t-6 14v144Zm-540 16v-520q0-22 17.5-33.5T175-777l399 167q19 8 23 23.5t-2 29.5q-6 14-20 22t-33 0L200-680v140l124 31q11 3 16.5 11t5.5 18q0 10-5.5 18T324-451l-124 31v140l149-63q19-8 32.5-.5T401-322q6 14 2 29.5T380-269l-204 86q-20 8-38-3.5T120-220ZM680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM337-480Z"/>
    </Icon>
  );
});

IconMaterialSendAndArchive.displayName = 'OnesyIconMaterialSendAndArchive';

export default IconMaterialSendAndArchive;
