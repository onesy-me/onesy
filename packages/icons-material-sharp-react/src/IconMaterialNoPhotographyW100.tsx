import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoPhotographyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoPhotographyW100'

      short_name='NoPhotography'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m828-244-28-28v-408H640l-73.9-80H394l-39 43-20-20 47-51h196l74 80h176v464Zm-696 72v-536h120l28 28H160v480h600l28 28H132Zm465-191q-19 29-49.37 46-30.37 17-67.63 17-59 0-99.5-40.5T340-440q0-37.26 17-67.63Q374-538 403-557l20 20q-24.91 14.33-39.95 39.68Q368-471.97 368-440q0 48 32 80t80 32q31.97 0 57.32-15.05Q562.67-358.09 577-383l20 20Zm-18.35-175.65Q596-522 606.5-500.5T619-453L493-579q26 2 47.5 12.5t38.15 27.85ZM852-68 90-830l20-20L872-88l-20 20ZM480-440Zm97-55Z"/>
    </Icon>
  );
});

IconMaterialNoPhotographyW100.displayName = 'OnesyIconMaterialNoPhotographyW100';

export default IconMaterialNoPhotographyW100;
