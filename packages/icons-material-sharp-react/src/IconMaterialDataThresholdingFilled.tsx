import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataThresholdingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataThresholdingFilled'

      short_name='DataThresholding'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m269-320-69 69v51h34l120-120h-85Zm158 0L307-200h85l120-120h-85Zm149 0L456-200h85l120-120h-85Zm150 0L606-200h85l69-69v-51h-34Zm-72-380L507-553l-80-80-177 177 56 56 121-120 80 80 203-204-56-56ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialDataThresholdingFilled.displayName = 'OnesyIconMaterialDataThresholdingFilled';

export default IconMaterialDataThresholdingFilled;
