import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGif = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Gif'

      short_name='Gif'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M460-360v-240h60v240h-60Zm-260 0v-240h200v60H260v120h80v-60h60v120H200Zm380 0v-240h180v60H640v40h80v60h-80v80h-60Z"/>
    </Icon>
  );
});

IconMaterialGif.displayName = 'OnesyIconMaterialGif';

export default IconMaterialGif;
