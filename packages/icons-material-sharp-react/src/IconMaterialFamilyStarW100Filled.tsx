import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFamilyStarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamilyStarW100Filled'

      short_name='FamilyStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.82-348Q518-348 548-371.5q30-23.5 44-58.5H368q14 35 43.82 58.5 29.83 23.5 68 23.5Zm-79.58-136q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5Zm160 0q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5ZM331-668l149-200 149 200 237 80-153 204 6 233-239-71-239 71 6-234L95-588l236-80Z"/>
    </Icon>
  );
});

IconMaterialFamilyStarW100Filled.displayName = 'OnesyIconMaterialFamilyStarW100Filled';

export default IconMaterialFamilyStarW100Filled;
