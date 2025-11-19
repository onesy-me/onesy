import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbsUpDoubleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbsUpDoubleW100'

      short_name='ThumbsUpDouble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m733-322 107-250v-50H608l24-168-100 99-19-19 117-118 31 32-21 146h228v84L764-322h-31ZM92-172v-328h136v28H120v272h108v28H92Zm108 0v-304l201-202 32 32-21 146h232v85L539-172H200Zm28-28h293l95-221v-51H379l24-168-175 176v264Zm0 0v-272 272Z"/>
    </Icon>
  );
});

IconMaterialThumbsUpDoubleW100.displayName = 'OnesyIconMaterialThumbsUpDoubleW100';

export default IconMaterialThumbsUpDoubleW100;
