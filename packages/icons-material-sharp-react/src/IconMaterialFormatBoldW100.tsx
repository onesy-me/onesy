import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatBoldW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatBoldW100'

      short_name='FormatBold'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M328-239v-482h152q55 0 95.5 35t40.5 89q0 35-19.5 64.5T544-489q40 10 64 43.5t24 75.5q0 57-43 94t-101 37H328Zm30-28h128q46 0 80-29t34-74q0-45-34-74t-80-29H358v206Zm0-234h121q42 0 73.5-27t31.5-69q0-42-31.5-69T479-693H358v192Z"/>
    </Icon>
  );
});

IconMaterialFormatBoldW100.displayName = 'OnesyIconMaterialFormatBoldW100';

export default IconMaterialFormatBoldW100;
