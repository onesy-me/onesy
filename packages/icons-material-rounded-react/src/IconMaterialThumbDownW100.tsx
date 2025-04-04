import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbDownW100'

      short_name='ThumbDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-372q-23 0-41.5-18.5T92-432v-40q0-5.17 1-11.09Q94-489 96-494l106.05-252.12Q210-764 229-776t39.37-12H658v416L437-153q-7 7-15 9t-15-2q-7-4-10-12t-1-17l40-197H152Zm478-12v-376H268q-11 0-22.5 6T228-734L120-480v48q0 14 9 23t23 9h318l-44 218 204-202Zm138-404q24.75 0 42.38 17.62Q828-752.75 828-728v296q0 24.75-17.62 42.37Q792.75-372 768-372H658v-28h110q14 0 23-9t9-23v-296q0-14-9-23t-23-9H658v-28h110Zm-138 28v376-376Z"/>
    </Icon>
  );
});

IconMaterialThumbDownW100.displayName = 'OnesyIconMaterialThumbDownW100';

export default IconMaterialThumbDownW100;
