import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPianoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PianoFilled'

      short_name='Piano'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h130v-180h-10q-17 0-28.5-11.5T280-420v-340h-80v560Zm430 0h130v-560h-80v340q0 17-11.5 28.5T640-380h-10v180Zm-240 0h180v-180h-10q-17 0-28.5-11.5T520-420v-340h-80v340q0 17-11.5 28.5T400-380h-10v180Z"/>
    </Icon>
  );
});

IconMaterialPianoFilled.displayName = 'OnesyIconMaterialPianoFilled';

export default IconMaterialPianoFilled;
