import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHotelClassW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelClassW100Filled'

      short_name='HotelClass'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m606-400 135-117q7.08.87 11.04 6.12 3.96 5.25 3.96 11.38 0 3.5-1.29 6.41-1.28 2.91-4.71 5.09l-112 97 34 148V-239.19q0 7.19-4.5 11.69Q663-223 656-223h-4.59q-2.41 0-4.41-2l-41-175Zm-71-219-38-90q1.92-5.28 5.96-8.14 4.04-2.86 8.9-2.86t9.5 3q4.64 3 6.64 8l39 93-32-3ZM267-297l29-123-95-83q-5-5-8-10.67-3-5.66-3-11.33 0-10.68 7.5-19.84T218-555l125.49-11.07L392-682q3.75-9 11.63-13.5 7.87-4.5 16.12-4.5t16.33 4.5Q444.15-691 448-682l48.51 115.93L622-555q13 1 20.5 10.13t7.5 19.78q0 6.09-3 11.59t-8 10.5l-95 83 29.33 123.05q.67 1.95.67 6.52 0 12.93-8.93 21.68T544.23-260q-2.23 0-16.23-5l-108-65-108 65q-4 2-8.12 3.5-4.13 1.5-7.88 1.5-13.5 0-23.25-11T267-297Z"/>
    </Icon>
  );
});

IconMaterialHotelClassW100Filled.displayName = 'OnesyIconMaterialHotelClassW100Filled';

export default IconMaterialHotelClassW100Filled;
