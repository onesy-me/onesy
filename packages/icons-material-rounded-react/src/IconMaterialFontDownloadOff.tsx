import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFontDownloadOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FontDownloadOff'

      short_name='FontDownloadOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m791-57-24-23H160q-33 0-56.5-23.5T80-160v-607l-25-25q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57ZM160-160h527L160-687v527Zm720-640v509q0 27-24.5 37t-43.5-9q-6-6-9-13.5t-3-15.5v-508H292q-8 0-15.5-3t-13.5-9q-19-19-8.5-43.5T292-880h508q33 0 56.5 23.5T880-800ZM624-451 502-573l-20-57h-4l-9 24-54-54 13-35q5-11 15-18t22-7h30q12 0 22 7t15 18l92 244Zm-200 27Zm114-114Zm25 140 123 123q-2 14-12.5 24.5T647-240q-12 0-22-7t-14-18l-48-133Zm-179 36-35 97q-4 11-14 18t-22 7q-20 0-32.5-16.5T276-293l108-284 56 56-32 89h121l70 70H384Z"/>
    </Icon>
  );
});

IconMaterialFontDownloadOff.displayName = 'OnesyIconMaterialFontDownloadOff';

export default IconMaterialFontDownloadOff;
