import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPianoOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PianoOff'

      short_name='PianoOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m791-55-65-65H120v-606l-65-65 57-57 736 736-57 57Zm49-179-80-80v-446h-80v366L520-554v-206h-80v126L234-840h606v606Zm-640 34h130v-180h-50v-186l-80-80v446Zm190 0h180v-76L438-408v28h-48v180Zm240 0h16l-16-16v16Z"/>
    </Icon>
  );
});

IconMaterialPianoOff.displayName = 'OnesyIconMaterialPianoOff';

export default IconMaterialPianoOff;
