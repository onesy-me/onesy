import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCompostFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompostFilled'

      short_name='Compost'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-100q-79 0-148-30t-120.5-81.5Q160-263 130-332t-30-148q0-79 30-148t81.5-120.5Q263-800 332-830t148-30v-52q0-14 12-19t22 5l98 98q12 12 12 28t-12 28l-98 98q-10 10-22 5t-12-19v-52q-108 0-184 76t-76 184q0 66 30.5 122.5T332-266q16-28 47.5-47.5T452-338q-3-21-8-42t-12-39q-11 9-24 14t-28 5q-33 0-56.5-23.5T300-480v-40q0-8-1.5-15.5T295-550q-5-11 1.5-20.5T314-579q45 2 95 22t51 77q0 9-1.5 16.5T453-448q-13-10-26-18t-27-14q17 13 39 40t41 64q20-49 50-96.5t70-87.5q-23 16-44 34t-41 38q-7-11-11-24.5t-4-27.5q0-42 29-71t71-29h40q14 0 29.5-3.5T696-657q7-7 16-3.5t9 13.5q0 25-3.5 60.5t-16 68Q689-486 665-463t-65 23q-15 0-28.5-4T547-455q-7 19-16 50.5T517-337q38 7 67 26t44 45q42-29 70-72t38-95q5-25 22.5-42t41.5-17q26 0 43.5 18.5T857-430q-18 141-124.5 235.5T480-100Z"/>
    </Icon>
  );
});

IconMaterialCompostFilled.displayName = 'OnesyIconMaterialCompostFilled';

export default IconMaterialCompostFilled;
