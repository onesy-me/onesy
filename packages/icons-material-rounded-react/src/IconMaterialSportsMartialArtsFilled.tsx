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
      <path d="m500-480-18 362q-1 16-12.5 27T438-80q-16 0-27.5-11T398-118l-18-322-127-73-14 52 61 107q8 14 3.5 30T285-300q-14 8-30 4t-24-18l-70-121q-4-7-5-15t1-16l43-156 230-132-82-82q-11-11-11.5-27.5T348-892q11-11 28-11t28 11l119 118q14 14 11.5 33.5T515-711l-99 57 48 42 300-245q11-10 26.5-8.5T818-850q9 11 8.5 25T816-800L500-480ZM200-680q-33 0-56.5-23.5T120-760q0-33 23.5-56.5T200-840q33 0 56.5 23.5T280-760q0 33-23.5 56.5T200-680Z"/>
    </Icon>
  );
});

IconMaterialSportsMartialArtsFilled.displayName = 'OnesyIconMaterialSportsMartialArtsFilled';

export default IconMaterialSportsMartialArtsFilled;
