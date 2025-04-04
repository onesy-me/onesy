import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrAutoSelectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrAutoSelectFilled'

      short_name='HdrAutoSelect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-632 40-116h4l40 116h-84Zm42 232q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm-56-192h112l21 58q2 7 8 10.5t13 3.5q12 0 18.5-9.5T598-550l-88-235q-2-7-8-11t-14-4h-18q-8 0-14 4t-8 11l-87 235q-4 11 2.5 20.5T382-520q8 0 13.5-4t7.5-11l21-57Zm396 432h-50q-13 0-21.5-8.5T740-190q0-13 8.5-21.5T770-220h50v-50q0-13 8.5-21.5T850-300q13 0 21.5 8.5T880-270v50h50q13 0 21.5 8.5T960-190q0 13-8.5 21.5T930-160h-50v50q0 13-8.5 21.5T850-80q-13 0-21.5-8.5T820-110v-50Zm-300 50v-180q0-13 8.5-21.5T550-320h110q24 0 42 18t18 42v40q0 23-10.5 35.5T684-164l20 46q6 14-2 26t-24 12q-8 0-15-4t-10-12l-29-64h-44v50q0 13-8.5 21.5T550-80q-13 0-21.5-8.5T520-110Zm60-110h80v-40h-80v40ZM60-180v70q0 13-8.5 21.5T30-80q-13 0-21.5-8.5T0-110v-180q0-13 8.5-21.5T30-320q13 0 21.5 8.5T60-290v50h80v-50q0-13 8.5-21.5T170-320q13 0 21.5 8.5T200-290v180q0 13-8.5 21.5T170-80q-13 0-21.5-8.5T140-110v-70H60Zm200 70v-180q0-13 8.5-21.5T290-320h110q24 0 42 18t18 42v120q0 24-18 42t-42 18H290q-13 0-21.5-8.5T260-110Zm60-30h80v-120h-80v120Z"/>
    </Icon>
  );
});

IconMaterialHdrAutoSelectFilled.displayName = 'OnesyIconMaterialHdrAutoSelectFilled';

export default IconMaterialHdrAutoSelectFilled;
