import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderAll = (props: IIcon) => {

  return (
    <Icon
      name='BorderAll'

      short_name='BorderAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm640-80v-240H520v240h240Zm0-560H520v240h240v-240Zm-560 0v240h240v-240H200Zm0 560h240v-240H200v240Z"/>
    </Icon>
  );
};

IconMaterialBorderAll.displayName = 'OnesyIconMaterialBorderAll';

export default IconMaterialBorderAll;
