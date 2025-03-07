import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterPh = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterPh'

      short_name='WaterPh'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-866q8 0 14.5 2.5T427-856q44 39 92 86t89.5 100q41.5 53 72 111T718-440q2 17-9.5 28.5T680-400q-17 0-28.5-11.5T637-440q-6-36-21.5-68.5T579-573q-30-46-74.5-96.5T400-774Q281-665 220.5-573T160-408q0 82 42.5 146T324-172q23 8 30 22.5t4 28.5q-3 14-14 24t-26 6q-112-27-175-115.5T80-408q0-64 29-127.5T182-657q44-58 95.5-109t95.5-90q6-5 12.5-7.5T400-866Zm0 397Zm180 309h-80v50q0 13-8.5 21.5T470-80q-13 0-21.5-8.5T440-110v-180q0-13 8.5-21.5T470-320h110q24 0 42 18t18 42v40q0 24-18 42t-42 18Zm160-20v70q0 13-8.5 21.5T710-80q-13 0-21.5-8.5T680-110v-180q0-13 8.5-21.5T710-320q13 0 21.5 8.5T740-290v50h80v-50q0-13 8.5-21.5T850-320q13 0 21.5 8.5T880-290v180q0 13-8.5 21.5T850-80q-13 0-21.5-8.5T820-110v-70h-80Zm-240-40h80v-40h-80v40Z"/>
    </Icon>
  );
});

IconMaterialWaterPh.displayName = 'OnesyIconMaterialWaterPh';

export default IconMaterialWaterPh;
