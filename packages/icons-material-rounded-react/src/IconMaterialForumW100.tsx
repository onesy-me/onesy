import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForumW100'

      short_name='Forum'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-332q-11.9 0-19.95-8.05Q264-348.1 264-360v-28h455l33 33v-365h28q11.9 0 19.95 8.05Q808-703.9 808-692v400q0 19.69-18.5 27.34Q771-257 757-271l-61-61H292Zm-28-136-61 61q-14 14-32.5 6.34Q152-408.31 152-428v-372q0-11.9 8.05-19.95Q168.1-828 180-828h464q11.9 0 19.95 8.05Q672-811.9 672-800v304q0 11.9-8.05 19.95Q655.9-468 644-468H264Zm380-28v-304H180v376l72-72h392Zm-464 0v-304 304Z"/>
    </Icon>
  );
});

IconMaterialForumW100.displayName = 'OnesyIconMaterialForumW100';

export default IconMaterialForumW100;
