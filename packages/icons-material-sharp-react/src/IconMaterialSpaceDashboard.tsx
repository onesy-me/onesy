import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpaceDashboard = (props: IIcon) => {

  return (
    <Icon
      name='SpaceDashboard'

      short_name='SpaceDashboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h240v-560H200v560Zm320 0h240v-280H520v280Zm0-360h240v-200H520v200Z"/>
    </Icon>
  );
};

IconMaterialSpaceDashboard.displayName = 'OnesyIconMaterialSpaceDashboard';

export default IconMaterialSpaceDashboard;
