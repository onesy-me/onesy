import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallQualityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallQualityFilled'

      short_name='CallQuality'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M758-80q-125 0-247.5-54T288-288Q188-388 134-510T80-758v-42h236l37 201-114 115q22 39 49 74t58 65q29 29 63.5 55.5T484-240l116-116 200 41v235h-42Zm-78-400q-83 0-141.5-58.5T480-680q0-83 58.5-141.5T680-880q83 0 141.5 58.5T880-680q0 83-58.5 141.5T680-480Zm-20-80h40v-160h-40v160Zm0-200h40v-40h-40v40Z"/>
    </Icon>
  );
});

IconMaterialCallQualityFilled.displayName = 'OnesyIconMaterialCallQualityFilled';

export default IconMaterialCallQualityFilled;
