import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubwayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubwayW100'

      short_name='Subway'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-474q0-66 36.5-117t99.5-77q47-18 104-23t108-5q51 0 108 5t104 23q63 26 99.5 77T828-606v474H132Zm214-28h268l-60-68H406l-60 68Zm-46-268h360v-172H300v172Zm298.18 120q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5Zm-236 0q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5ZM160-160h160v-20l44-50q-45-5-68.5-35T272-340v-260q0-51 58.5-70.5T480-690q100 0 154 19.5t54 70.5v260q0 45-23.5 74.5T596-230l44 50v20h160v-446q0-60-29.5-102.5T682-774q-44-17-97.5-21.5T480-800q-51 0-104.5 4.5T278-774q-59 23-88.5 65.5T160-606v446Zm0 0h640-640Z"/>
    </Icon>
  );
});

IconMaterialSubwayW100.displayName = 'OnesyIconMaterialSubwayW100';

export default IconMaterialSubwayW100;
