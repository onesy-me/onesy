import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTypeSpecimenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TypeSpecimenFilled'

      short_name='TypeSpecimen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M392-380h64l32-92h146l32 92h62L592-740h-64L392-380Zm114-144 52-150h4l52 150H506ZM240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Z"/>
    </Icon>
  );
});

IconMaterialTypeSpecimenFilled.displayName = 'OnesyIconMaterialTypeSpecimenFilled';

export default IconMaterialTypeSpecimenFilled;
