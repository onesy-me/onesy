import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaW100'

      short_name='Spa'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M498-134q-59.21-6.94-117.6-30.47Q322-188 274-233.5 226-279 193.5-349T154-518l-2-30 28 2q39 3 97.5 23.5T374-472q3-72 32-153t74-137q45 56 74 138t32 154q35-27 91.5-50T778-546l30-2-2 32q-4 71-23 130.5t-56 107Q690-231 634-195t-136 61Zm0-28q-11-166-98.5-251T182-518q11 171 101.5 255T498-162Zm-18-186q13-26 34-54.5t44-47.5q0-63-20.5-131.5T480-712q-37 62-57.5 130.5T402-450q23 19 43.5 47.5T480-348Zm46 174q50-17 94-44t78-68q34-41 55-98t25-134q-98 14-175 70T494-312q12 32 19.5 63t12.5 75Zm-46-174Zm46 174Zm-28 12Zm-4-150Zm4 178Z"/>
    </Icon>
  );
});

IconMaterialSpaW100.displayName = 'OnesyIconMaterialSpaW100';

export default IconMaterialSpaW100;
