import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOffW100'

      short_name='FolderOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M828-608v329q0 7-4.5 10.5T814-265q-5 0-9.5-3.5T800-279v-329q0-14-9-23t-23-9H459q-12 0-23.5-5T416-658l-66-66q-5-5-4.5-10.5t4.5-9.5q4-4 9.5-4.5T370-744l76 76h322q26 0 43 17t17 43ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h20l28 28h-48q-14 0-23 9t-9 23v416q0 14 9 23t23 9h488L134-786q-4-4-4.5-9.5T134-806q5-5 10-5t10 5l692 692q4 4 4.5 9.5T846-94q-5 5-10 5t-10-5L708-212H192Zm248-268Zm137-17Z"/>
    </Icon>
  );
});

IconMaterialFolderOffW100.displayName = 'OnesyIconMaterialFolderOffW100';

export default IconMaterialFolderOffW100;
