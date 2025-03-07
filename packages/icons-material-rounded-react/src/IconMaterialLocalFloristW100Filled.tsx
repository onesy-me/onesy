import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalFloristW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalFloristW100Filled'

      short_name='LocalFlorist'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-561q34 0 56.5-22.5T559-640q0-34-22.5-56.5T480-719q-34 0-56.5 22.5T401-640q0 34 22.5 56.5T480-561Zm0 128q-29 0-52-17.5T397-499q-5 3-11.5 3.5t-12.5.5q-35 0-59.5-24T289-578q0-17 7.5-32.5T315-640q-11-14-18-29.5t-7-32.5q0-35 24-59t59-24q6 0 12.5.5T398-782q8-30 30.5-47.5T480-847q29 0 51.5 17.5T562-782q6-2 12.5-2.5t12.5-.5q35 0 59 24t24 59q0 17-7 33t-18 29q11 14 18 29.5t7 32.5q0 35-24 59t-59 24q-6 0-12.5-.5T561-499q-7 31-29.5 48.5T480-433Zm0 292q0-92 72-176t165-99q9-2 17-.5t14 8.5q6 7 7.5 15.5T755-376q-19 91-101.5 163T480-141Zm0 1q0-92-72-176t-165-99q-9-2-17-.5t-14 8.5q-6 7-7.5 15.5t.5 16.5q19 91 101.5 163T480-140Z"/>
    </Icon>
  );
});

IconMaterialLocalFloristW100Filled.displayName = 'OnesyIconMaterialLocalFloristW100Filled';

export default IconMaterialLocalFloristW100Filled;
