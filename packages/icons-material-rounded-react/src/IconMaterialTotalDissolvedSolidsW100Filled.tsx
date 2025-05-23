import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTotalDissolvedSolidsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TotalDissolvedSolidsW100Filled'

      short_name='TotalDissolvedSolids'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-488q-17 0-26-14t-2-29q36-74 97.5-142T460-793q5-5 10-6.5t10-1.5q5 0 10.5 1.5t9.5 6.5q57 52 118.5 120T716-531q8 15-1.5 29T688-488H272Zm476 81q0 11-1 22t-3 22L514-134q-11 2-21.5 2.5T471-132l277-275Zm-179-1h41L360-159q-7-3-13.5-6.5T334-174l235-234Zm-179 0h41L264-241q-5-6-8.5-12t-7.5-13l142-142Zm-137 0-39 39q0-2-.5-3.5t-.5-3.5q-2-13 7.5-22.5T244-408h9Z"/>
    </Icon>
  );
});

IconMaterialTotalDissolvedSolidsW100Filled.displayName = 'OnesyIconMaterialTotalDissolvedSolidsW100Filled';

export default IconMaterialTotalDissolvedSolidsW100Filled;
