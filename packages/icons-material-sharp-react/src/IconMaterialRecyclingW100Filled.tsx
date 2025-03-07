import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRecyclingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecyclingW100Filled'

      short_name='Recycling'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m390-566 72-117-48-79q-9-16-27.5-16t-27.99 16.07L281-631l109 65Zm309.86 218L629-466l111-64 51 85q8 14 9.5 31t-6.5 31q-8 17-24 26t-34.31 9h-35.83ZM608-124 480-252l128-128v64h152l-46.4 92.8q-8.8 16-24 25.6-15.2 9.6-33.6 9.6h-48v64Zm-309.95-64Q282-188 269-196t-19-21.91Q244-231 244-245t7.2-26.04L278.4-316H416v128H298.05ZM219-279l-52-104q-8-15-7-31.5t9.56-30.5L182-466l-54-33 175-44 44 176-55-34-73 122Zm432-274-175.2-43.96 55.2-32.78L431-796h112.8q16.8 0 31.6 8.35 14.8 8.34 23.6 22.65l42 70 54-34-44 176Z"/>
    </Icon>
  );
});

IconMaterialRecyclingW100Filled.displayName = 'OnesyIconMaterialRecyclingW100Filled';

export default IconMaterialRecyclingW100Filled;
