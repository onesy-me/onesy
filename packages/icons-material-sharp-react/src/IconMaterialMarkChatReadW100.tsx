import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkChatReadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatReadW100'

      short_name='MarkChatRead'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M694-197 590-302l19-19 85 85 170-170 19 20-189 189Zm-562 17v-648h696v334h-28v-306H160v552l72-72h274v28H244L132-180Zm28-140v72-552 480Z"/>
    </Icon>
  );
});

IconMaterialMarkChatReadW100.displayName = 'OnesyIconMaterialMarkChatReadW100';

export default IconMaterialMarkChatReadW100;
