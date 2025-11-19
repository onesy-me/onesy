import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMargin = (props: IIcon) => {

  return (
    <Icon
      name='Margin'

      short_name='Margin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Zm80-400v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80ZM280-440v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Z"/>
    </Icon>
  );
};

IconMaterialMargin.displayName = 'OnesyIconMaterialMargin';

export default IconMaterialMargin;
