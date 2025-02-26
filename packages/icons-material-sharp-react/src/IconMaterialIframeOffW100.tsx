import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIframeOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IframeOffW100'

      short_name='IframeOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M852-68 708-212H132v-536h80v40L90-830l20-20L872-88l-20 20ZM160-240h520L280-640H160v400Zm640-32v-368H432L324-748h504v504l-28-28Zm-96-96-28-28v-120H556l-28-28h176v176Z"/>
    </Icon>
  );
});

IconMaterialIframeOffW100.displayName = 'OnesyIconMaterialIframeOffW100';

export default IconMaterialIframeOffW100;
