import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGifW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GifW100Filled'

      short_name='Gif'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M476-376v-208h28v208h-28Zm-248 0v-208h168v28H256v152h112v-68h28v96H228Zm356 0v-208h148v28H612v64h80v28h-80v88h-28Z"/>
    </Icon>
  );
});

IconMaterialGifW100Filled.displayName = 'OnesyIconMaterialGifW100Filled';

export default IconMaterialGifW100Filled;
