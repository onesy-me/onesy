import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSegment = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Segment'

      short_name='Segment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-240q-17 0-28.5-11.5T360-280q0-17 11.5-28.5T400-320h400q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H400Zm0-200q-17 0-28.5-11.5T360-480q0-17 11.5-28.5T400-520h400q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H400ZM160-640q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z"/>
    </Icon>
  );
});

IconMaterialSegment.displayName = 'OnesyIconMaterialSegment';

export default IconMaterialSegment;
