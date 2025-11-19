import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPageHeaderW100 = (props: IIcon) => {

  return (
    <Icon
      name='PageHeaderW100'

      short_name='PageHeader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-760v-28h616v28H172Zm0 588v-488h616v488H172Zm28-28h560v-432H200v432Zm0 0v-432 432Z"/>
    </Icon>
  );
};

IconMaterialPageHeaderW100.displayName = 'OnesyIconMaterialPageHeaderW100';

export default IconMaterialPageHeaderW100;
