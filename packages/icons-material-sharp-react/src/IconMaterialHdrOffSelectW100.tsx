import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrOffSelectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOffSelectW100'

      short_name='HdrOffSelect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M836-96v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28Zm-300 0v-208h168v126h-44l36 82h-30l-36-80h-66v80h-28Zm28-108h112v-72H564v72ZM16-96v-208h28v80h112v-80h28v208h-28v-100H44v100H16Zm260 0v-208h154l14 14v180l-14 14H276Zm28-28h112v-152H304v152Zm353-452-22-22q3-11 4-21t1-21q0-66-47-113t-113-47q-11 0-22 1.5t-19 3.5l-22-22q14-5 30-8t33-3q78.33 0 133.17 54.83Q668-718.33 668-640q0 15-2.5 32t-8.5 32Zm1 154-67-67q-22 17-49.5 27T480-452q-78.33 0-133.17-54.83Q292-561.67 292-640q0-30 9-59t28-52l-69-67 20-22 398 398-20 20Zm-87-87L349-731q-14 20-21.5 43.5T320-640q0 66 47 113t113 47q27 0 48.5-7t42.5-22Zm-34-188Zm-77 77Z"/>
    </Icon>
  );
});

IconMaterialHdrOffSelectW100.displayName = 'OnesyIconMaterialHdrOffSelectW100';

export default IconMaterialHdrOffSelectW100;
