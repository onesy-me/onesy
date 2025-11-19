import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabletAndroid = (props: IIcon) => {

  return (
    <Icon
      name='TabletAndroid'

      short_name='TabletAndroid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-40q-33 0-56.5-23.5T120-120v-720q0-33 23.5-56.5T200-920h560q33 0 56.5 23.5T840-840v720q0 33-23.5 56.5T760-40H200Zm0-200v120h560v-120H200Zm220 80h120q8 0 14-6t6-14q0-8-6-14t-14-6H420q-8 0-14 6t-6 14q0 8 6 14t14 6ZM200-320h560v-400H200v400Zm0-480h560v-40H200v40Zm0 0v-40 40Zm0 560v120-120Z"/>
    </Icon>
  );
};

IconMaterialTabletAndroid.displayName = 'OnesyIconMaterialTabletAndroid';

export default IconMaterialTabletAndroid;
