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
      <path d="M132-212v-448h28v420h560v28H132Zm108-108v-428h332l-28 28H268v372h532v-276l28-28v332H240Zm273-177q-13 0-24-4.5T470-516q11 0 21-4.5t10-14.5q0-12 8.5-20t20.5-8q11 0 19.5 8.5T558-535q0 17-13.5 27.5T513-497Zm84-67-34-34 189-188 34 34-189 188Z"/>
    </Icon>
  );
});

IconMaterialSlideLibraryW100.displayName = 'OnesyIconMaterialSlideLibraryW100';

export default IconMaterialSlideLibraryW100;
