import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignItemsStretchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignItemsStretchW100Filled'

      short_name='AlignItemsStretch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M336-266q-12.75 0-21.37-8.63Q306-283.25 306-296v-368q0-12.75 8.63-21.38Q323.25-694 336-694h8q12.75 0 21.38 8.62Q374-676.75 374-664v368q0 12.75-8.62 21.37Q356.75-266 344-266h-8Zm280 0q-12.75 0-21.37-8.63Q586-283.25 586-296v-368q0-12.75 8.63-21.38Q603.25-694 616-694h8q12.75 0 21.38 8.62Q654-676.75 654-664v368q0 12.75-8.62 21.37Q636.75-266 624-266h-8ZM146-132q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h668q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H146Zm0-668q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h668q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H146Z"/>
    </Icon>
  );
});

IconMaterialAlignItemsStretchW100Filled.displayName = 'OnesyIconMaterialAlignItemsStretchW100Filled';

export default IconMaterialAlignItemsStretchW100Filled;
