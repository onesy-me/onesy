import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHtmlFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HtmlFilled'

      short_name='Html'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M0-360v-240h60v80h80v-80h60v240h-60v-100H60v100H0Zm310 0v-180h-70v-60h200v60h-70v180h-60Zm170 0v-240h260v240h-60v-180h-40v140h-60v-140h-40v180h-60Zm320 0v-240h60v180h100v60H800Z"/>
    </Icon>
  );
});

IconMaterialHtmlFilled.displayName = 'OnesyIconMaterialHtmlFilled';

export default IconMaterialHtmlFilled;
