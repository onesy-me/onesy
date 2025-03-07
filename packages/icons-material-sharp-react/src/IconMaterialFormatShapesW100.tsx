import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatShapesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatShapesW100'

      short_name='FormatShapes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M112-112v-148h60v-440h-60v-148h148v60h440v-60h148v148h-60v440h60v148H700v-60H260v60H112Zm148-88h440v-60h60v-440h-60v-60H260v60h-60v440h60v60Zm71-120 142-360h14l144 360h-32l-44-108H405l-44 108h-30Zm84-134h130l-64-164h-4l-62 164ZM140-728h92v-92h-92v92Zm588 0h92v-92h-92v92Zm0 588h92v-92h-92v92Zm-588 0h92v-92h-92v92Zm92-588Zm496 0Zm0 496Zm-496 0Z"/>
    </Icon>
  );
});

IconMaterialFormatShapesW100.displayName = 'OnesyIconMaterialFormatShapesW100';

export default IconMaterialFormatShapesW100;
