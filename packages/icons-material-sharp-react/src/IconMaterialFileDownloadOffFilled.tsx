import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileDownloadOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadOffFilled'

      short_name='FileDownloadOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M791-55 686-160H160v-200h80v120h366L503-343l-23 23-200-200 23-23L55-791l57-57 736 736-57 57ZM617-457l-57-57 64-64 56 58-63 63Zm-97-97-80-80v-166h80v246Zm280 280-80-80v-6h80v86Z"/>
    </Icon>
  );
});

IconMaterialFileDownloadOffFilled.displayName = 'OnesyIconMaterialFileDownloadOffFilled';

export default IconMaterialFileDownloadOffFilled;
