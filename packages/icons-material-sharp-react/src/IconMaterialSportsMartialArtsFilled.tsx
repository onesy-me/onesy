import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsMartialArtsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsMartialArtsFilled'

      short_name='SportsMartialArts'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m400-80-20-360-127-73-14 52 81 141-69 40-99-170 48-172 230-132-110-110 56-56 184 183-144 83 48 42 328-268 48 56-340 344-20 400h-80ZM200-680q-33 0-56.5-23.5T120-760q0-33 23.5-56.5T200-840q33 0 56.5 23.5T280-760q0 33-23.5 56.5T200-680Z"/>
    </Icon>
  );
});

IconMaterialSportsMartialArtsFilled.displayName = 'OnesyIconMaterialSportsMartialArtsFilled';

export default IconMaterialSportsMartialArtsFilled;
