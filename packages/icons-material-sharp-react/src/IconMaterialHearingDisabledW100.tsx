import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHearingDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HearingDisabledW100'

      short_name='HearingDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M852-68 548-372q-42 37-64.5 58T449-279q-12 14-17 26t-13 33q-20 57-55.5 85.5T279-106q-49 0-86-30t-46-78h30q9 35 38 57.5t64 22.5q40 0 67-22.5t47-73.5q9-24 15.5-38t19-29q12.5-15 35.5-36t65-59L203-717q-12 20-19 43t-9 48h-28q2-31 11.5-59t24.5-52l-93-93 20-20L872-88l-20 20ZM725-347l-20-20q39-52 59.5-111T785-600q0-71-24-136t-72-120l20-18q50 57 77 128t27 146q0 69-22.5 133.5T725-347ZM617-455l-22-22q15-29 22.5-60t7.5-63q0-95-65.5-160.5T399-826q-32 0-62.5 8.5T279-793l-21-21q31-20 67-30t74-10q109 0 181.5 72.5T653-600q0 40-9 76.5T617-455ZM479-593l-87-87h7q34 0 57 23t23 57v7Zm-80 73q-34 0-57-23t-23-57q0-9 1.5-17.5T326-634l107 107q-8 4-16.5 5.5T399-520Z"/>
    </Icon>
  );
});

IconMaterialHearingDisabledW100.displayName = 'OnesyIconMaterialHearingDisabledW100';

export default IconMaterialHearingDisabledW100;
