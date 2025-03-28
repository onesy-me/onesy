import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestProtectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestProtectW100'

      short_name='NestProtect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M333-172q-67.62 0-114.31-46.69T172-333v-294q0-67 46.69-114T333-788h294q67 0 114 47t47 114v294q0 67.62-47 114.31T627-172H333Zm0-28h294q56 0 94.5-38.24T760-333v-294q0-56-38.5-94.5T627-760H333q-56.52 0-94.76 38.5T200-627v294q0 56.52 38.24 94.76T333-200Zm146.73-119Q412-319 365.5-365.56q-46.5-46.57-46.5-114Q319-547 365.56-594q46.57-47 114-47Q547-641 594-594.23t47 114.5q0 67.73-46.77 114.23T479.73-319Zm-.1-28q56.37 0 94.87-38.13 38.5-38.13 38.5-94.5t-38.33-94.87q-38.34-38.5-95-38.5Q423-613 385-574.67q-38 38.34-38 95Q347-423 385.13-385t94.5 38Z"/>
    </Icon>
  );
});

IconMaterialNestProtectW100.displayName = 'OnesyIconMaterialNestProtectW100';

export default IconMaterialNestProtectW100;
