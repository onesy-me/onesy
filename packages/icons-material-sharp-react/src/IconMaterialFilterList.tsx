import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterList = (props: IIcon) => {

  return (
    <Icon
      name='FilterList'

      short_name='FilterList'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z"/>
    </Icon>
  );
};

IconMaterialFilterList.displayName = 'OnesyIconMaterialFilterList';

export default IconMaterialFilterList;
