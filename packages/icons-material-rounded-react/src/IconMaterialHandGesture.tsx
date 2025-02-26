import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHandGesture = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandGesture'

      short_name='HandGesture'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-40q-83 0-141.5-58.5T40-240q0-13 8.5-21.5T70-270q13 0 21.5 8.5T100-240q0 58 41 99t99 41q13 0 21.5 8.5T270-70q0 13-8.5 21.5T240-40Zm670-689q-13 0-21.5-8.5T880-759q0-51-35-86t-86-35q-13 0-21.5-8.5T729-910q0-13 8.5-21.5T759-940q75 0 128 53t53 128q0 13-8.5 21.5T910-729ZM402-40q-30 0-56-13.5T303-92L67-438q-8-12-7-26t12-24q19-19 45-22t47 12l116 81v-383q0-17 11.5-28.5T320-840q17 0 28.5 11.5T360-800v460q0 24-21.5 35.5T297-307l-85-60 157 229q5 8 14 13t19 5h278q33 0 56.5-23.5T760-200v-560q0-17 11.5-28.5T800-800q17 0 28.5 11.5T840-760v560q0 66-47 113T680-40H402Zm78-880q17 0 28.5 11.5T520-880v360q0 17-11.5 28.5T480-480q-17 0-28.5-11.5T440-520v-360q0-17 11.5-28.5T480-920Zm160 40q17 0 28.5 11.5T680-840v320q0 17-11.5 28.5T640-480q-17 0-28.5-11.5T600-520v-320q0-17 11.5-28.5T640-880ZM486-300Z"/>
    </Icon>
  );
});

IconMaterialHandGesture.displayName = 'OnesyIconMaterialHandGesture';

export default IconMaterialHandGesture;
