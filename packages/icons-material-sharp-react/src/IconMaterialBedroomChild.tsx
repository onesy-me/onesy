import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBedroomChild = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedroomChild'

      short_name='BedroomChild'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280h60v-60h360v60h60v-254h-60v-146H300v146h-60v254Zm120-260v-80h240v80H360Zm-60 140v-80h360v80H300ZM80-80v-800h800v800H80Zm80-80h640v-640H160v640Zm0 0v-640 640Z"/>
    </Icon>
  );
});

IconMaterialBedroomChild.displayName = 'OnesyIconMaterialBedroomChild';

export default IconMaterialBedroomChild;
