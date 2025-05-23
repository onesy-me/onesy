import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmojiNatureW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiNatureW100Filled'

      short_name='EmojiNature'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m720-628-44 40q-8 8-19.5 8t-22.5-6q-8-5-11-15.5t1-24.5l20-66-46-28q-10-6-14-16.5t-2-21.5q2-10 11.5-16t22.5-6h56l16-54q3-11 12-18.5t20-7.5q11 0 20 7.5t12 18.5l16 54h56q12 0 21.5 6t12.5 16q4 11 .5 22T846-720l-50 28 20 64q4 13 1.5 24.5T806-586q-10 7-22 6.5t-20-8.5l-44-40Zm0-50q15 0 25.5-10.5T756-714q0-15-10.5-25.5T720-750q-15 0-25.5 10.5T684-714q0 15 10.5 25.5T720-678ZM502-252q17 44-12.5 82T409-132q-25 0-46.5-15T328-188q-58 0-99-40.5T188-326q-26-11-41-36t-15-56q0-49 43.5-74.5T268-498l50 20q11-38 40.5-62t67.5-26v-80h28v80q45 3 77.5 35.5T568-450h80v28h-80q-2 37-27 66.5T478-314l24 62Zm-252-92q38 0 77.5-15t84.5-47l-154-66q-35-15-66.5 2T160-418q0 31 26 52.5t64 21.5Zm159 184q36 0 57.5-26t9.5-56l-64-164q-35 44-51.5 82.5T344-248q0 38 18.5 63t46.5 25Zm59-180q32-12 52-38t20-58q0-42-29-72t-71-30q-35 0-61.5 20T344-466l90 38 34 88Z"/>
    </Icon>
  );
});

IconMaterialEmojiNatureW100Filled.displayName = 'OnesyIconMaterialEmojiNatureW100Filled';

export default IconMaterialEmojiNatureW100Filled;
