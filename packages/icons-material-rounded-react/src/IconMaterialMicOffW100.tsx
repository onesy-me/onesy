import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicOffW100'

      short_name='MicOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M643.5-447q-5.5-2-8-8t-.5-11q4-9 5-19l2-20q1-6 5.04-10.5 4.03-4.5 10-4.5 5.96 0 9.96 5 4 5 4 11-1 12-2.5 24.5T662-456q-2 6-7.5 8.5t-11 .5ZM443-657Zm0-171q29 0 48.5 19.5T511-760v138q0 7-4.32 10.5t-9.5 3.5q-5.18 0-9.68-3.59-4.5-3.58-4.5-10.41v-138q0-17-11.5-28.5T443-800q-17 0-28.5 11.5T403-760v28q0 7-4.32 10.5t-9.5 3.5q-5.18 0-9.68-3.59-4.5-3.58-4.5-10.41v-28q0-29 19.5-48.5T443-828Zm-14 668v-132q-85-6-146-66t-67-147q-1-6 2.93-10.5t10-4.5q6.07 0 10.07 4.31t5 10.69q6 79 63.5 132T443-320q46 0 85.5-19t67.5-52l20 20q-29 34-70 55t-89 24v132q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Zm360 2L95-852q-4-4-4.5-9.5T95-872q5-5 10-5t10 5l694 694q4 4 4.5 9.5T809-158q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialMicOffW100.displayName = 'OnesyIconMaterialMicOffW100';

export default IconMaterialMicOffW100;
