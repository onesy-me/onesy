import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSlideLibraryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlideLibraryW100'

      short_name='SlideLibrary'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-25 0-42.5-17.5T132-272v-374q0-6 4-10t10-4q6 0 10 4t4 10v374q0 14 9 23t23 9h514q6 0 10 4t4 10q0 6-4 10t-10 4H192Zm108-108q-25 0-42.5-17.5T240-380v-308q0-25 17.5-42.5T300-748h244q6 0 10 4t4 10q0 6-4 10t-10 4H300q-14 0-23 9t-9 23v308q0 14 9 23t23 9h468q14 0 23-9t9-23v-244q0-6 4-10t10-4q6 0 10 4t4 10v244q0 25-17.5 42.5T768-320H300Zm213-177q-10 0-19.5-3t-16.5-9q-2-2-1-5.5t5-3.5q8 0 14-4t6-13q0-12 8.5-20t20.5-8q11 0 19.5 8.5T558-535q0 17-13.5 27.5T513-497Zm63-88 8 8q-9-9-9-21t9-21l147-146q9-9 21-9t21 9q5 5 5 13t-5 13L618-585q-9 9-21 9t-21-9Z"/>
    </Icon>
  );
});

IconMaterialSlideLibraryW100.displayName = 'OnesyIconMaterialSlideLibraryW100';

export default IconMaterialSlideLibraryW100;
