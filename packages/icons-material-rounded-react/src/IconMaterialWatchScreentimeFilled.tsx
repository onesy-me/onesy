import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWatchScreentimeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchScreentimeFilled'

      short_name='WatchScreentime'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M390-400q-13 0-21.5-8.5T360-430v-100q0-13 8.5-21.5T390-560q13 0 21.5 8.5T420-530v100q0 13-8.5 21.5T390-400Zm90 0q-13 0-21.5-8.5T450-430v-60q0-13 8.5-21.5T480-520q13 0 21.5 8.5T510-490v60q0 13-8.5 21.5T480-400Zm90 0q-13 0-21.5-8.5T540-430v-20q0-13 8.5-21.5T570-480q13 0 21.5 8.5T600-450v20q0 13-8.5 21.5T570-400ZM420-80q-26 0-47.5-15.5T343-137l-37-125q-48-38-77-95t-29-123q0-66 29-123t77-95l37-125q8-26 29.5-41.5T420-880h120q26 0 47.5 15.5T617-823l37 125q48 38 77 95t29 123q0 66-29 123t-77 95l-37 125q-8 26-29.5 41.5T540-80H420Zm60-200q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z"/>
    </Icon>
  );
});

IconMaterialWatchScreentimeFilled.displayName = 'OnesyIconMaterialWatchScreentimeFilled';

export default IconMaterialWatchScreentimeFilled;
