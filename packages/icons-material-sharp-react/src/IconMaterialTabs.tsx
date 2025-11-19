import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabs = (props: IIcon) => {

  return (
    <Icon
      name='Tabs'

      short_name='Tabs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h560v-280H200v280Zm0-360h560v-200H200v200Zm280-80h240v-80H480v80Zm-280 80v-200 200Z"/>
    </Icon>
  );
};

IconMaterialTabs.displayName = 'OnesyIconMaterialTabs';

export default IconMaterialTabs;
