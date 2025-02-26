import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCo2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Co2W100'

      short_name='Co2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M416-376v-208h168v208H416Zm28-28h112v-152H444v152Zm-308 28v-208h168v48h-28v-20H164v152h112v-20h28v48H136Zm560 120v-118h120v-62H696v-28h148v118H724v62h120v28H696Z"/>
    </Icon>
  );
});

IconMaterialCo2W100.displayName = 'OnesyIconMaterialCo2W100';

export default IconMaterialCo2W100;
