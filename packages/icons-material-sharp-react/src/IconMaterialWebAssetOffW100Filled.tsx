import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWebAssetOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebAssetOffW100Filled'

      short_name='WebAssetOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M852-68 708-212H132v-536h80v40L90-830l20-20L872-88l-20 20ZM160-240h520L280-640H160v400Zm668-4-28-28v-368H432L324-748h504v504Z"/>
    </Icon>
  );
});

IconMaterialWebAssetOffW100Filled.displayName = 'OnesyIconMaterialWebAssetOffW100Filled';

export default IconMaterialWebAssetOffW100Filled;
