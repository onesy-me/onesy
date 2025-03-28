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
      <path d="m763-84-37-36H200q-33 0-56.5-23.5T120-200v-526l-37-37q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84Zm77-150-80-80v-446h-80v340q0 5-1.5 10t-4.5 10L520-554v-206h-80v126L234-840h526q33 0 56.5 23.5T840-760v526Zm-640 34h130v-180h-10q-17 0-28.5-11.5T280-420v-146l-80-80v446Zm190 0h180v-76L438-408q-4 13-14.5 20.5T400-380h-10v180Zm240 0h16l-16-16v16Z"/>
    </Icon>
  );
});

IconMaterialPianoOff.displayName = 'OnesyIconMaterialPianoOff';

export default IconMaterialPianoOff;
