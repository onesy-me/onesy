import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAnalytics = (props: IIcon) => {

  return (
    <Icon
      name='Analytics'

      short_name='Analytics'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm80-80h80v-200h-80v200Zm320 0h80v-400h-80v400Zm-160 0h80v-120h-80v120Zm0-200h80v-80h-80v80ZM200-200v-560 560Z"/>
    </Icon>
  );
};

IconMaterialAnalytics.displayName = 'OnesyIconMaterialAnalytics';

export default IconMaterialAnalytics;
