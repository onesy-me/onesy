import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCampingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CampingW100'

      short_name='Camping'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-136v-94q0-10 3-19t9-17l319-429-29-39q-2-2-2.5-5t0-5.5q.5-2.5 2-5t3.5-4.5q5-4 10-3t9 6l24 33 24-33q4-5 9.5-6t10.5 3q5 4 6 9.5t-3 10.5l-29 39 318 429q6 8 9 17t3 19v94q0 13-8.5 21.5T798-106H162q-13 0-21.5-8.5T132-136Zm348-535L160-241v107h133l163-227q9-13 24-13t24 13l163 227h133v-107L480-671ZM328-134h304L480-347 328-134Zm177-227 162 227-163-227q-9-13-24-13t-24 13L293-134l163-227q9-13 24.5-13t24.5 13Z"/>
    </Icon>
  );
});

IconMaterialCampingW100.displayName = 'OnesyIconMaterialCampingW100';

export default IconMaterialCampingW100;
