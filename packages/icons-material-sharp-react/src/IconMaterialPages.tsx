import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPages = (props: IIcon) => {

  return (
    <Icon
      name='Pages'

      short_name='Pages'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0-560v560-560Zm163 450 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133Z"/>
    </Icon>
  );
};

IconMaterialPages.displayName = 'OnesyIconMaterialPages';

export default IconMaterialPages;
