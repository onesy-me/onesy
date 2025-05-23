import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicOffW100Filled'

      short_name='MicOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M643-447q-5-2-7.5-8t-.5-11q4-9 5-19l2-20q1-6 5-10.5t10-4.5q6 0 10 5t4 11q-1 12-2.5 24.5T662-456q-2 6-7.5 8.5t-11.5.5ZM483-616l-90-92q-8-8-13-19.5t-5-23.5v-9q0-29 19.5-48.5T443-828q29 0 48.5 19.5T511-760v133q0 11-10 15t-18-4Zm-54 456v-130q-85-8-146-68t-67-147q-1-6 3-10.5t10-4.5q6 0 10 4.5t5 10.5q6 79 63.5 132T443-320q46 0 85.5-19t67.5-52l20 20q-29 34-70 55t-89 26v130q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm360 2L95-852q-4-4-4.5-9.5T95-872q5-5 10-5t10 5l694 694q4 4 4.5 9.5T809-158q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialMicOffW100Filled.displayName = 'OnesyIconMaterialMicOffW100Filled';

export default IconMaterialMicOffW100Filled;
