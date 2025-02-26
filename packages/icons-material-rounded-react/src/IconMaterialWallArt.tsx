import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWallArt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallArt'

      short_name='WallArt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80q-33 0-56.5-23.5T80-160v-480q0-33 23.5-56.5T160-720h160l132-132q12-12 28-12t28 12l132 132h160q33 0 56.5 23.5T880-640v480q0 33-23.5 56.5T800-80H160Zm0-80h640v-480H160v480Zm290-120-74-99q-6-8-16-8t-16 8l-80 107q-8 10-2 21t18 11h400q12 0 18-11t-2-21L586-419q-6-8-16-8t-16 8L450-280Zm250-160q25 0 42.5-17.5T760-500q0-25-17.5-42.5T700-560q-25 0-42.5 17.5T640-500q0 25 17.5 42.5T700-440ZM404-720h152l-76-76-76 76ZM160-160v-480 480Z"/>
    </Icon>
  );
});

IconMaterialWallArt.displayName = 'OnesyIconMaterialWallArt';

export default IconMaterialWallArt;
