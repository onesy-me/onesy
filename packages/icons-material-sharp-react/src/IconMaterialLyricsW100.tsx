import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLyricsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LyricsW100'

      short_name='Lyrics'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M190-320v-480 480Zm-28 114v-622h496v68q-8 4-14.5 8.5T630-742v-58H190v480h440v-138q7 5 13.5 9.5T658-440v148H248l-86 86Zm134-220h108v-28H296v28Zm444.12-80q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.42-66.62Q700.83-694 740-694q22 0 36.5 6.5T806-665v-229h108v28h-80v266q0 39.17-27.38 66.58Q779.24-506 740.12-506ZM296-546h228v-28H296v28Zm0-120h228v-28H296v28Z"/>
    </Icon>
  );
});

IconMaterialLyricsW100.displayName = 'OnesyIconMaterialLyricsW100';

export default IconMaterialLyricsW100;
