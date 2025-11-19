import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWindowOpen = (props: IIcon) => {

  return (
    <Icon
      name='WindowOpen'

      short_name='WindowOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120v-720h640v720H160Zm80-400h200v-40h80v40h200v-240H240v240Zm0 320h480-480Z"/>
    </Icon>
  );
};

IconMaterialWindowOpen.displayName = 'OnesyIconMaterialWindowOpen';

export default IconMaterialWindowOpen;
