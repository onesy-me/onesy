import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToysW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToysW100Filled'

      short_name='Toys'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-186q-42 0-69.5-31.5T186-292h-66v-226h102l-88-88-40 40-20-20 100-100 20 20-40 40 90 90 58-172h351l65 188h122v228h-66q3 43-24.5 74.5T680-186q-39 0-66.5-27.5T586-280H374q0 39-27.5 66.5T280-186Zm-12-334h196v-160H321l-53 160Zm224 0h196l-53-160H492v160ZM280-214q27 0 46.5-19.5T346-280q0-27-19.5-46.5T280-346q-27 0-46.5 19.5T214-280q0 27 19.5 46.5T280-214Zm400 0q27 0 46.5-19.5T746-280q0-27-19.5-46.5T680-346q-27 0-46.5 19.5T614-280q0 27 19.5 46.5T680-214Z"/>
    </Icon>
  );
});

IconMaterialToysW100Filled.displayName = 'OnesyIconMaterialToysW100Filled';

export default IconMaterialToysW100Filled;
