import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlugConnectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlugConnectW100'

      short_name='PlugConnect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-212v-46H172v-208H92v-28h80v-208h148v-46h28v536h-28Zm-120-74h120v-388H200v388Zm412 74v-145H465v-28h147v-190H465v-28h147v-145h28v46h148v208h80v28h-80v208H640v46h-28Zm28-74h120v-388H640v388ZM320-480Zm320 0Z"/>
    </Icon>
  );
});

IconMaterialPlugConnectW100.displayName = 'OnesyIconMaterialPlugConnectW100';

export default IconMaterialPlugConnectW100;
