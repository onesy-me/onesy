import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRvHookupW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RvHookupW100'

      short_name='RvHookup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m772-162-20-20 70-70H444q-4 35-30.5 57.5T352-172q-35 0-61-22.5T260-252H124v-282h212v-120H124v-28h496v402h202l-70-70 20-20 104 104-104 104ZM368-534h224v-120H368v120Zm-16 334q27 0 46.5-19.5T418-266q0-27-19.5-46.5T352-332q-27 0-46.5 19.5T286-266q0 27 19.5 46.5T352-200Zm-92-80q5-35 31-57.5t61-22.5q35 0 61.5 22.5T444-280h148v-226H152v226h108Zm0-226H152h440-332Z"/>
    </Icon>
  );
});

IconMaterialRvHookupW100.displayName = 'OnesyIconMaterialRvHookupW100';

export default IconMaterialRvHookupW100;
