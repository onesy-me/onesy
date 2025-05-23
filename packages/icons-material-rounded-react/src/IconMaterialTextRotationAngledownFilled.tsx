import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextRotationAngledownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationAngledownFilled'

      short_name='TextRotationAngledown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M464-200 120-544q-11-11-11-28t11-28q11-11 28-11t28 11l344 344v-24q0-17 11.5-28.5T560-320q17 0 28.5 11.5T600-280v120q0 17-11.5 28.5T560-120H440q-17 0-28.5-11.5T400-160q0-17 11.5-28.5T440-200h24Zm12-428-84 39q-10 5-20.5 3.5T353-595q-14-14-10.5-32t20.5-26l358-162q11-5 22-3t19 10l20 20q8 8 10 19t-3 22L625-388q-8 17-26 20t-31-10q-8-8-10-19t3-22l41-83-126-126Zm62-30 92 94 84-174-2-2-174 82Z"/>
    </Icon>
  );
});

IconMaterialTextRotationAngledownFilled.displayName = 'OnesyIconMaterialTextRotationAngledownFilled';

export default IconMaterialTextRotationAngledownFilled;
