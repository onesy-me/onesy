import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMusicCast = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicCast'

      short_name='MusicCast'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-160q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T640-458v-302q0-17 11.5-28.5T680-800h160q17 0 28.5 11.5T880-760v40q0 17-11.5 28.5T840-680H720v360q0 66-47 113t-113 47ZM278-603q-48 48-78 109.5T162-362q-2 17-13.5 29.5T120-320q-17 0-28.5-13T82-363q8-87 44.5-162.5T221-659q58-58 133.5-94.5T517-798q17-2 30 9.5t13 28.5q0 17-12.5 28.5T518-718q-70 8-131 37.5T278-603Zm113 113q-26 26-44 59.5T323-359q-3 17-14.5 28T280-320q-17 0-28-12.5t-9-29.5q7-54 30.5-100.5T334-546q37-37 83.5-60.5T518-637q17-2 29.5 9t12.5 28q0 17-11 28.5T521-557q-38 6-71 23.5T391-490Z"/>
    </Icon>
  );
});

IconMaterialMusicCast.displayName = 'OnesyIconMaterialMusicCast';

export default IconMaterialMusicCast;
