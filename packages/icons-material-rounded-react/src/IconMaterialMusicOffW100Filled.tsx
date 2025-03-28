import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMusicOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicOffW100Filled'

      short_name='MusicOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M758-112 142-728q-4-4-4.5-9.5T142-748q5-5 10-5t10 5l616 616q4 4 4.5 9.5T778-112q-5 5-10 5t-10-5ZM534-694v171q0 7.18-4.32 10.59t-9.5 3.41q-5.18 0-9.68-3.5T506-523v-225q0-12.75 8.74-21.38 8.75-8.62 21.67-8.62h121.66q12.93 0 21.43 8.62 8.5 8.63 8.5 21.38v24q0 12.75-8.62 21.37Q670.75-694 658-694H534ZM426-182q-44.55 0-76.27-31.73Q318-245.45 318-290t31.73-76.27Q381.45-398 426-398q23 0 44 9t36 27v-42l28 28v86q0 44.55-31.73 76.27Q470.55-182 426-182Z"/>
    </Icon>
  );
});

IconMaterialMusicOffW100Filled.displayName = 'OnesyIconMaterialMusicOffW100Filled';

export default IconMaterialMusicOffW100Filled;
