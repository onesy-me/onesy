import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChipExtractionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChipExtractionW100'

      short_name='ChipExtraction'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-480q0 112 75.5 191.5T462-201q6 1 10.5 5t4.5 10q0 6-4.5 10t-11.5 3q-122-8-205.5-96T172-480q0-121 81.5-209.5T456-787q8-1 14 2.5t6 10.5q0 6-4 10t-10 5q-111 8-186.5 87.5T200-480Zm550 14H400q-6 0-10-4t-4-10q0-6 4-10t10-4h349L630-614q-4-4-4-9.5t4-9.5q4-4 10-4t10 4l132 132q9 9 9 21t-9 21L650-327q-4 4-10 4t-10-4q-4-4-4-10t4-10l120-119Z"/>
    </Icon>
  );
});

IconMaterialChipExtractionW100.displayName = 'OnesyIconMaterialChipExtractionW100';

export default IconMaterialChipExtractionW100;
