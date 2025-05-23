import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLyrics = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Lyrics'

      short_name='Lyrics'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-320v-480 480Zm440 80H240l-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h440q33 0 56.5 23.5T680-800v40q0 17-11.5 28.5T640-720q-17 0-28.5-11.5T600-760v-40H160v480h440v-120q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440v120q0 33-23.5 56.5T600-240ZM280-400h80q17 0 28.5-11.5T400-440q0-17-11.5-28.5T360-480h-80q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400Zm480-80q-50 0-85-35t-35-85q0-50 35-85t85-35q11 0 21 2t19 5v-167q0-17 11.5-28.5T840-920h80q17 0 28.5 11.5T960-880q0 17-11.5 28.5T920-840h-40v240q0 50-35 85t-85 35Zm-480-40h200q17 0 28.5-11.5T520-560q0-17-11.5-28.5T480-600H280q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Zm0-120h200q17 0 28.5-11.5T520-680q0-17-11.5-28.5T480-720H280q-17 0-28.5 11.5T240-680q0 17 11.5 28.5T280-640Z"/>
    </Icon>
  );
});

IconMaterialLyrics.displayName = 'OnesyIconMaterialLyrics';

export default IconMaterialLyrics;
