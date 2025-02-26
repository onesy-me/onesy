import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLyricsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LyricsFilled'

      short_name='Lyrics'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-400h80q17 0 28.5-11.5T400-440q0-17-11.5-28.5T360-480h-80q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400Zm480-80q-50 0-85-35t-35-85q0-50 35-85t85-35q11 0 21 2t19 5v-167q0-17 11.5-28.5T840-920h80q17 0 28.5 11.5T960-880q0 17-11.5 28.5T920-840h-40v240q0 50-35 85t-85 35Zm-480-40h200q17 0 28.5-11.5T520-560q0-17-11.5-28.5T480-600H280q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Zm0-120h200q17 0 28.5-11.5T520-680q0-17-11.5-28.5T480-720H280q-17 0-28.5 11.5T240-680q0 17 11.5 28.5T280-640Zm-40 400-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h440q31 0 54.5 19t23.5 49q0 14-6.5 25T654-769q-44 27-69 72t-25 97q0 54 26.5 100t73.5 73q22 13 35 34.5t13 47.5q0 45-31.5 75T600-240H240Z"/>
    </Icon>
  );
});

IconMaterialLyricsFilled.displayName = 'OnesyIconMaterialLyricsFilled';

export default IconMaterialLyricsFilled;
