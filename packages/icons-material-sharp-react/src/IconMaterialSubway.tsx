import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubway = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Subway'

      short_name='Subway'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-526q0-85 44-147.5T248-848q54-21 115-26.5t117-5.5q56 0 117 5.5T712-848q80 32 124 94.5T880-606v526H80Zm284-80h230l-60-60H424l-60 60Zm-64-280h360v-160H300v160Zm320 140q17 0 28.5-11.5T660-340q0-17-11.5-28.5T620-380q-17 0-28.5 11.5T580-340q0 17 11.5 28.5T620-300Zm-280 0q17 0 28.5-11.5T380-340q0-17-11.5-28.5T340-380q-17 0-28.5 11.5T300-340q0 17 11.5 28.5T340-300ZM160-160h140v-20l42-42q-44-6-73-39.5T240-340v-260q0-78 74.5-99T480-720q100 0 170 21t70 99v260q0 45-29 78.5T618-222l42 42v20h140v-446q0-60-29.5-102.5T682-774q-44-17-97.5-21.5T480-800q-51 0-104.5 4.5T278-774q-59 23-88.5 65.5T160-606v446Zm0 0h640-640Z"/>
    </Icon>
  );
});

IconMaterialSubway.displayName = 'OnesyIconMaterialSubway';

export default IconMaterialSubway;
