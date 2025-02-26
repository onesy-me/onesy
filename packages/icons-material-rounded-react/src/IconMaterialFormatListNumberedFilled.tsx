import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatListNumberedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatListNumberedFilled'

      short_name='FormatListNumbered'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M150-80q-13 0-21.5-8.5T120-110q0-13 8.5-21.5T150-140h70v-30h-30q-13 0-21.5-8.5T160-200q0-13 8.5-21.5T190-230h30v-30h-70q-13 0-21.5-8.5T120-290q0-13 8.5-21.5T150-320h90q17 0 28.5 11.5T280-280v40q0 17-11.5 28.5T240-200q17 0 28.5 11.5T280-160v40q0 17-11.5 28.5T240-80h-90Zm0-280q-13 0-21.5-8.5T120-390v-80q0-17 11.5-28.5T160-510h60v-30h-70q-13 0-21.5-8.5T120-570q0-13 8.5-21.5T150-600h90q17 0 28.5 11.5T280-560v70q0 17-11.5 28.5T240-450h-60v30h70q13 0 21.5 8.5T280-390q0 13-8.5 21.5T250-360H150Zm60-280q-13 0-21.5-8.5T180-670v-150h-30q-13 0-21.5-8.5T120-850q0-13 8.5-21.5T150-880h60q13 0 21.5 8.5T240-850v180q0 13-8.5 21.5T210-640Zm190 440q-17 0-28.5-11.5T360-240q0-17 11.5-28.5T400-280h400q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200H400Zm0-240q-17 0-28.5-11.5T360-480q0-17 11.5-28.5T400-520h400q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H400Zm0-240q-17 0-28.5-11.5T360-720q0-17 11.5-28.5T400-760h400q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680H400Z"/>
    </Icon>
  );
});

IconMaterialFormatListNumberedFilled.displayName = 'OnesyIconMaterialFormatListNumberedFilled';

export default IconMaterialFormatListNumberedFilled;
