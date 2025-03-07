import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrEnhancedSelectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrEnhancedSelectW100Filled'

      short_name='HdrEnhancedSelect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.24-452Q402-452 347-506.76q-55-54.77-55-133Q292-718 346.76-773q54.77-55 133-55Q558-828 613-773.24q55 54.77 55 133Q668-562 613.24-507q-54.77 55-133 55ZM466-546v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28ZM836-96v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28Zm-300 0v-208h168v126h-44l36 82h-30l-36-80h-66v80h-28Zm28-108v-72h112v72H564ZM16-96v-208h28v80h112v-80h28v208h-28v-100H44v100H16Zm260 0v-208h154l14 14v180l-14 14H276Zm28-28v-152h112v152H304Z"/>
    </Icon>
  );
});

IconMaterialHdrEnhancedSelectW100Filled.displayName = 'OnesyIconMaterialHdrEnhancedSelectW100Filled';

export default IconMaterialHdrEnhancedSelectW100Filled;
