import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChipExtractionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChipExtractionFilled'

      short_name='ChipExtraction'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-480q0 106 69 185t174 93q16 2 26.5 14t10.5 28q0 17-14.5 28t-32.5 9q-135-17-224-118.5T120-480q0-136 88.5-237.5T432-837q19-2 33.5 8.5T480-800q0 16-10.5 28T443-758q-105 14-174 93t-69 185Zm487 40H400q-17 0-28.5-11.5T360-480q0-17 11.5-28.5T400-520h287l-75-75q-12-12-12-28.5t12-28.5q12-12 28-12t28 12l144 144q12 12 12 28t-12 28L668-308q-12 12-28 11.5T612-309q-12-12-12-28t12-28l75-75Z"/>
    </Icon>
  );
});

IconMaterialChipExtractionFilled.displayName = 'OnesyIconMaterialChipExtractionFilled';

export default IconMaterialChipExtractionFilled;
