import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrOnSelectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOnSelectW100'

      short_name='HdrOnSelect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm.24 28Q402-452 347-506.76q-55-54.77-55-133Q292-718 346.76-773q54.77-55 133-55Q558-828 613-773.24q55 54.77 55 133Q668-562 613.24-507q-54.77 55-133 55ZM480-640ZM836-96v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28Zm-300 0v-208h168v126h-44l36 82h-30l-36-80h-66v80h-28Zm28-108h112v-72H564v72ZM16-96v-208h28v80h112v-80h28v208h-28v-100H44v100H16Zm260 0v-208h154l14 14v180l-14 14H276Zm28-28h112v-152H304v152Z"/>
    </Icon>
  );
});

IconMaterialHdrOnSelectW100.displayName = 'OnesyIconMaterialHdrOnSelectW100';

export default IconMaterialHdrOnSelectW100;
