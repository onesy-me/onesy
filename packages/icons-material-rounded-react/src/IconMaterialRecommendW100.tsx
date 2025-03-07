import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRecommendW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecommendW100'

      short_name='Recommend'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M374-322h208q8 0 13.5-3t8.5-11l64-148q3-8 4.5-15t1.5-13v-14q0-6-3-9t-9-3H448l22.15-109.92Q472-656 469-663t-8-12l-1-1-108 116q-3 3.43-4.5 7.71Q346-548 346-542v192q0 11.55 8.23 19.77Q362.45-322 374-322Zm106.17 190q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialRecommendW100.displayName = 'OnesyIconMaterialRecommendW100';

export default IconMaterialRecommendW100;
