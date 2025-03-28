import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSkilletFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkilletFilled'

      short_name='Skillet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160q-50 0-85-35t-35-85v-160q0-17 11.5-28.5T120-480h521q5-34 27-59.5t54-36.5l147-49q16-5 31 2t20 23q5 16-2.5 31T894-549l-147 49q-12 4-19.5 14.5T720-462v182q0 50-35 85t-85 35H200Zm-51-520q-26-31-37.5-59T99-800q0-17 12.5-28.5T141-840q15 0 24.5 12t9.5 28q0 20 7 37t24 37q30 36 42.5 64.5T260-600q-1 17-14 28.5T216-560q-14 0-22.5-12t-8.5-27q0-23-9.5-42T149-680Zm161 0q-26-31-38-59t-13-61q0-17 12.5-28.5T301-840q15 0 24.5 12t9.5 28q0 20 7 37t24 37q30 36 42.5 64.5T420-600q-1 17-14 28.5T376-560q-14 0-22.5-12t-8.5-27q1-23-8.5-42T310-680Zm160 0q-26-31-38-59t-13-61q0-17 12.5-28.5T461-840q15 0 24.5 12t9.5 28q0 20 7 37t24 37q30 36 42.5 64.5T580-600q-1 17-14 28.5T536-560q-14 0-22.5-12t-8.5-27q1-23-8.5-42T470-680Z"/>
    </Icon>
  );
});

IconMaterialSkilletFilled.displayName = 'OnesyIconMaterialSkilletFilled';

export default IconMaterialSkilletFilled;
