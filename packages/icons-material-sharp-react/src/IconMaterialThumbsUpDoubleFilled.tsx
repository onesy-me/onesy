import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbsUpDoubleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbsUpDoubleFilled'

      short_name='ThumbsUpDouble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m716-280 44-103v-217H532l13-88-49-48 144-144 60 60-20 140h240v120L800-280h-84ZM40-120v-400h80v400H40Zm160 0v-400l200-200 60 60-20 140h240v120L560-120H200Z"/>
    </Icon>
  );
});

IconMaterialThumbsUpDoubleFilled.displayName = 'OnesyIconMaterialThumbsUpDoubleFilled';

export default IconMaterialThumbsUpDoubleFilled;
